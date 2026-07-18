# -*- coding: utf-8 -*-
"""
一次性图片优化脚本：
- public/images/ 下所有 PNG/JPG 转 WebP (quality=82)
- 封面 cover-* 宽度 1600px，其余地图截图宽度 1920px（等比，只缩不放）
- 原始大文件移出到 portfolio-assets-original/images/ 备份（不删除）
"""
from pathlib import Path
from PIL import Image
import shutil

IMG_DIR = Path(r"C:/Users/Administrator/Documents/kimi/workspace/portfolio/public/images")
BACKUP_DIR = Path(r"C:/Users/Administrator/Documents/kimi/workspace/portfolio-assets-original/images")
BACKUP_DIR.mkdir(parents=True, exist_ok=True)

QUALITY = 82
results = []

for src in sorted(IMG_DIR.iterdir()):
    if src.suffix.lower() not in (".png", ".jpg", ".jpeg"):
        continue
    target_w = 1600 if src.stem.startswith("cover-") else 1920
    dst = src.with_suffix(".webp")

    with Image.open(src) as im:
        im = im.convert("RGB")
        w, h = im.size
        if w > target_w:
            new_h = round(h * target_w / w)
            im = im.resize((target_w, new_h), Image.LANCZOS)
        im.save(dst, "WEBP", quality=QUALITY, method=6)
        out_size = f"{im.size[0]}x{im.size[1]}"

    before = src.stat().st_size
    after = dst.stat().st_size
    results.append((src.name, dst.name, out_size, before, after))

    # 移走原始文件到备份目录
    shutil.move(str(src), str(BACKUP_DIR / src.name))

total_before = sum(r[3] for r in results)
total_after = sum(r[4] for r in results)

print(f"{'原文件':<42}{'输出':<12}{'原大小':>10}{'WebP':>10}  压缩率")
for name, out, dim, b, a in results:
    print(f"{name:<42}{dim:<12}{b/1024/1024:>8.2f}MB{a/1024:>8.0f}KB  {a/b*100:>5.1f}%")
print("-" * 90)
print(f"总计: {total_before/1024/1024:.2f} MB -> {total_after/1024:.2f} MB "
      f"(节省 {(1-total_after/total_before)*100:.1f}%)")
print(f"原件已备份至: {BACKUP_DIR}")
