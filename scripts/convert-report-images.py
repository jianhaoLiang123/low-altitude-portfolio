# -*- coding: utf-8 -*-
"""一次性脚本：作品03（低空公共服务产业调研分析报告）素材转 WebP。
原图不动，仅输出 webp 到 public/images/。"""
from pathlib import Path
from PIL import Image

OUT = Path(r"C:/Users/Administrator/Documents/kimi/workspace/portfolio/public/images")
REPORT_DIR = Path(r"D:/BaiduNetdiskWorkspace/行业分析/0.低空经济/1.训练营/作业/S7/作业一/图片")

JOBS = [
    # (源文件, 输出名, 目标宽度)
    (Path(r"D:/BaiduNetdiskWorkspace/行业分析/0.低空经济/求职/portfolio/公共服务封面.png"),
     "cover-public-service.webp", 1600),
    *[(REPORT_DIR / f"低空公共服务产业调研分析报告{i}.jpg", f"report-ps-{i}.webp", 1920)
      for i in range(1, 5)],
]

for src, name, target_w in JOBS:
    if not src.exists():
        print(f"✗ 源文件不存在: {src}")
        continue
    with Image.open(src) as im:
        im = im.convert("RGB")
        w, h = im.size
        if w > target_w:
            im = im.resize((target_w, round(h * target_w / w)), Image.LANCZOS)
        dst = OUT / name
        im.save(dst, "WEBP", quality=82, method=6)
        print(f"✓ {src.name} ({w}x{h}) -> {name} ({im.size[0]}x{im.size[1]}) "
              f"{src.stat().st_size/1024:.0f}KB -> {dst.stat().st_size/1024:.0f}KB")
