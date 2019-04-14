from http.server import HTTPServer, BaseHTTPRequestHandler

class Server(BaseHTTPRequestHandler):

    def do_GET(self):
        #load inital page
        if self.path == '/':
            self.path = '/index.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        #write the selected file in bytes
        self.wfile.write(bytes(file_to_open, 'utf-8'))


httpd = HTTPServer(('localhost', 8888), Server)
httpd.serve_forever()
