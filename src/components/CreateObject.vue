<template>
    <div>
      <div class="hello">
        <h1>{{ msg }}</h1>
      </div>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Model name</label>
          <input type="text" class="form-control" id="objectName" placeholder="Enter the name of your new model">
        </div>
        <div class="form-group">
          <label for="attribs">Attributes</label>
          <div style="height: 250px;" id="attribs">
            <ul>
              <li>Deezy</li>
            </ul>

          </div>
          <button class="btn-primary" style="width: 30vw; ">Add New</button>
          <!--<select multiple class="form-control" id="attribs" disabled style="height: 250px;">-->
            <!--<option value="volvo">Volvo</option>-->
            <!--<option value="saab">Saab</option>-->
            <!--<option value="fiat">Fiat</option>-->
            <!--<option value="audi">Audi</option>-->
            <!--<option value="audi">Audi</option>-->
          <!--</select>-->
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CreateObject',
  data() {
    return {
      msg: 'Create an object here',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  text-align: center;
}

</style>
