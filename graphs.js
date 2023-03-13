class Graph {
  constructor() {
    this.adjancecyList = {};
  }

  addVertex(value) {
    if (!this.adjancecyList[value]) this.adjancecyList[value] = [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjancecyList[vertex1] || !this.adjancecyList[vertex2]) {
      return new Error("Invalid vertex");
    }

    this.adjancecyList[vertex1].push(vertex2);
    this.adjancecyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjancecyList[vertex1] || !this.adjancecyList[vertex2]) {
      return new Error("Invalid vertex");
    }

    this.adjancecyList[vertex1] = this.adjancecyList[vertex1].filter(
      (v) => v !== vertex1
    );
    this.adjancecyList[vertex2] = this.adjancecyList[vertex2].filter(
      (v) => v !== vertex2
    );
  }

  removeVertex(vertex) {
    if (!this.adjancecyList[vertex]) {
      return new Error("Invalid vertex");
    }
    let relatedVertices = this.adjancecyList[vertex];

    for (let relatedVertex of relatedVertices) {
      this.removeEdge(vertex, relatedVertex);
    }

    delete this.adjancecyList[vertex];

    return this;
  }
}
