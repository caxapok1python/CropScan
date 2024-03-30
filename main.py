import webview

if __name__ == '__main__':
    window = webview.create_window('CropScan', 'main.html', x=0, y=0, resizable=True, min_size=(800, 480))
    webview.start(window)
