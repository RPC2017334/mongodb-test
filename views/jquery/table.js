function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
                select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='2']").length;
        var movie = $(this).attr("id") - 1;
       console.log(section)
       console.log(movie)
		delete_row(section, movie);
	})
};

function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				movies: ent,
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});

function validateForm() {
    var title = document.forms["imdbForm"]["title"].value;
    var year = document.forms["imdbForm"]["year"].value;
    var genres = document.forms["imdbForm"]["genres"].value;
    var director = document.forms["imdbForm"]["director"].value;

    if (title == ""){
        alert("Plese enter title parameter");
        return false;
    }


     else if (year == ""){
        alert("Please enter year parameter");
        return false;
    }


     else if (genres == ""){
        alert("Please enter genres parameter ");
        return false;
    }

     else if (director == ""){
        alert("Please enter director parameter");
        return false;
    }
}