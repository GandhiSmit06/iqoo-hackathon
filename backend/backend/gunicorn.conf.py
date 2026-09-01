import os

bind = f"0.0.0.0:{os.environ.get('PORT', '10000')}"
timeout = 180
workers = 1
threads = 4
accesslog = "-"
errorlog = "-"
capture_output = True
enable_stdio_inheritance = True
