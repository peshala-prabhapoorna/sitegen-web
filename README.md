# SiteGen: Web Interface

![sitegen-demo-4](https://github.com/user-attachments/assets/39e0d819-8a69-47d6-8e37-1db58a0778c7)

Convert Markdown formatted text and documents to HTML documents. Get the best of both worlds. Enjoy the simple and elegant sytax of Markdown, and convert to HTML when necessary. Allowing you to deploy the documents on the web without friction.

Live: [SiteGen](https://sitegen.lavenderleit.dev/)

## Features

- Convert Markdown formatted text to an HTML document.
- Upload Markdwn documents.
- Preview the generated HTML document.
- Download the HTML document.
- Access previously converted Markdown documents.

## Tech Stack

The web UI is build with basic web development tools: HTML, CSS, JavaScript. SiteGen Python package ([peshala-prabhapoorna/sitegen-app](https://github.com/peshala-prabhapoorna/sitegen-app/releases/latest)) is used locally in the client browser to convert Markdown HTML. Pyodide is used to run Python in the broswer on the WebAssembly VM.

## Build Instructions

To build the project, run the following commands:

### Build and Run with Docker

Build the Docker image:

```bash
docker build -t sitegen-web:latest .
```

Run the container:

```bash
docker run -d -p 8080:80 --name sitegen-web sitegen-web
```

The application will be available at `http://localhost:8080`.

### Using Docker Compose

Start the application:

```bash
docker compose up -d
```

Stop the application:

```bash
docker compose down
```

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact:  

### Peshala Prabhapoorna  

GitHub: @peshala-prabhapoorna  
LinkedIn: [peshala-prabhapoorna](https://www.linkedin.com/in/peshala-prabhapoorna/)
