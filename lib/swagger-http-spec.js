// Generated by CoffeeScript 1.6.3
(function() {
  window.api_key = 'special-key';

  describe('SwaggerHttp for version 1.2 spec', function() {
    beforeEach(function() {
      var success;
      success = function() {
        return log("success");
      };
      window.authorizations.add("key", new ApiKeyAuthorization("api_key", "special-key", "header"));
      window.swagger = new SwaggerApi({
        url: 'http://localhost:8002/api/api-docs',
        success: success
      });
      return waitsFor(function() {
        return swagger.ready != null;
      });
    });
    describe("execute get operations", function() {
      beforeEach(function() {
        window.body = null;
        window.response = null;
        window.callback = null;
        window.error = null;
        window.success_callback = function(data) {
          return window.response = data;
        };
        return window.error_callback = function(data) {
          return window.error = data;
        };
      });
      it("verifies the http request object for a GET", function() {
        var opts, params;
        params = {
          headers: {},
          petId: 1
        };
        opts = {
          mock: true
        };
        return window.response = swagger.pet.getPetById(params, opts, success_callback, error_callback);
      });
      waitsFor(function() {
        return window.response != null;
      });
      runs(function() {
        var obj;
        obj = window.response;
        expect(obj.method).toBe("GET");
        expect(obj.headers["Accept"]).toBe("application/json");
        return expect(obj.url).toBe("http://localhost:8002/api/pet/1");
      });
      it("verifies the http request object for a GET with query params", function() {
        var opts, params;
        params = {
          headers: {},
          status: "available"
        };
        opts = {
          mock: true
        };
        return window.response = swagger.pet.findPetsByStatus(params, opts, success_callback, error_callback);
      });
      waitsFor(function() {
        return window.response != null;
      });
      return runs(function() {
        var obj;
        obj = window.response;
        expect(obj.method).toBe("GET");
        expect(obj.headers["Accept"]).toBe("application/json");
        return expect(obj.url).toBe("http://localhost:8002/api/pet/findByStatus?status=available");
      });
    });
    describe("execute post operations", function() {
      beforeEach(function() {
        window.body = null;
        window.response = null;
        window.callback = null;
        window.error = null;
        window.success_callback = function(data) {
          return window.response = data;
        };
        return window.error_callback = function(data) {
          return window.error = data;
        };
      });
      it("verifies the http request object for a POST", function() {
        var opts, params;
        params = {
          body: JSON.stringify({
            id: 100,
            name: "monster",
            status: "dead"
          })
        };
        opts = {
          mock: true
        };
        window.response = swagger.pet.addPet(params, opts, success_callback, error_callback);
        waitsFor(function() {
          return window.response != null;
        });
        return runs(function() {
          var obj;
          obj = window.response;
          log(obj);
          expect(obj.method).toBe("POST");
          expect(obj.headers["Accept"]).toBe("application/json");
          expect(obj.headers["Content-Type"]).toBe("application/json");
          return expect(obj.url).toBe("http://localhost:8002/api/pet");
        });
      });
      return it("verifies the http request object for a POST with form params", function() {
        var opts, params;
        params = {
          headers: {},
          petId: 1,
          name: "dog",
          status: "very happy"
        };
        opts = {
          mock: true
        };
        window.response = swagger.pet.updatePetWithForm(params, opts, success_callback, error_callback);
        waitsFor(function() {
          return window.response != null;
        });
        return runs(function() {
          var obj;
          obj = window.response;
          log(obj);
          expect(obj.body).toBe("name=dog&status=very%20happy");
          expect(obj.method).toBe("POST");
          expect(obj.headers["Accept"]).toBe("application/json");
          return expect(obj.url).toBe("http://localhost:8002/api/pet/1");
        });
      });
    });
    describe("execute put operations", function() {
      beforeEach(function() {
        window.body = null;
        window.response = null;
        window.callback = null;
        window.error = null;
        window.success_callback = function(data) {
          return window.response = data;
        };
        return window.error_callback = function(data) {
          return window.error = data;
        };
      });
      it("verifies the http request object for a PUT", function() {
        var opts, params;
        params = {
          body: JSON.stringify({
            id: 100,
            name: "monster",
            status: "dead"
          })
        };
        opts = {
          mock: true
        };
        return window.response = swagger.pet.updatePet(params, opts, success_callback, error_callback);
      });
      waitsFor(function() {
        return window.response != null;
      });
      return runs(function() {
        var obj;
        obj = window.response;
        expect(obj.method).toBe("PUT");
        expect(obj.headers["Accept"]).toBe(void 0);
        expect(obj.headers["Content-Type"]).toBe("application/json");
        return expect(obj.url).toBe("http://localhost:8002/api/pet");
      });
    });
    describe("execute delete operations", function() {
      beforeEach(function() {
        window.body = null;
        window.response = null;
        window.callback = null;
        window.error = null;
        window.success_callback = function(data) {
          return window.response = data;
        };
        return window.error_callback = function(data) {
          return window.error = data;
        };
      });
      it("verifies the http request object for a DELETE", function() {
        var opts, params;
        params = {
          petId: 100
        };
        opts = {
          mock: true
        };
        return window.response = swagger.pet.deletePet(params, opts, success_callback, error_callback);
      });
      waitsFor(function() {
        return window.response != null;
      });
      return runs(function() {
        var obj;
        obj = window.response;
        expect(obj.method).toBe("DELETE");
        expect(obj.headers["Accept"]).toBe(void 0);
        expect(obj.headers["Content-Type"]).toBe("application/json");
        return expect(obj.url).toBe("http://localhost:8002/api/pet/100");
      });
    });
    return describe("query params should be single encoded", function() {
      beforeEach(function() {
        window.body = null;
        window.response = null;
        window.callback = null;
        window.error = null;
        window.success_callback = function(data) {
          return window.response = data;
        };
        return window.error_callback = function(data) {
          return window.error = data;
        };
      });
      it("verifies the http request object for a DELETE", function() {
        var opts, params;
        params = {
          status: "a b c d e"
        };
        opts = {
          mock: true
        };
        return window.response = swagger.pet.findPetsByStatus(params, opts, success_callback, error_callback);
      });
      waitsFor(function() {
        return window.response != null;
      });
      return runs(function() {
        var obj;
        obj = window.response;
        expect(obj.method).toBe("GET");
        return expect(obj.url).toBe("http://localhost:8002/api/pet/findByStatus?status=a%20b%20c%20d%20e");
      });
    });
  });

}).call(this);
