describe("configure merge binding attributes", function(){
  beforeEach(function(){
    this.model = new AModel({
      name: "some",
      bio: "not much",
      education: "kindergarden",
      graduated: "sure",
      drivers_license: false
    });

    this.view = new MergeBindingAttributesView({model: this.model});
    this.view.render();
  });

	it("bind model field changes from configured attribute", function(){
		this.model.set("name", "other");
		var el = this.view.$("[name=name]");
		expect(el.val()).toEqual("other dude");
	});

	it("bind model field changes from default configuration", function(){
		this.model.set("education", "grade_school");
    var el = this.view.$("[name=education]");
    expect(el.val()).toEqual("grade_school");
	});
});
