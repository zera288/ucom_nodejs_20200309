var s1='{"faults":[],"bugs":[{"depends_on":[],"cf_last_resolved":"1998-12-12T17:06:46Z","duplicates":[],"is_confirmed":true,"mentors_detail":[],"groups":[],"comment_count":18,"votes":0,"priority":"P3","severity":"minor","regressions":[],"id":35,"assigned_to_detail":{"real_name":"Chris McAfee","name":"mcafee@gmail.com","email":"mcafee@gmail.com","nick":"mcafee","id":1672},"type":"defect","url":"","mentors":[],"qa_contact":"","platform":"Sun","op_sys":"Solaris","version":"1998-03-31","status":"VERIFIED","flags":[],"alias":"firstBug","blocks":[],"creator_detail":{"real_name":"","name":"weitsang@cs.cornell.edu","email":"weitsang@cs.cornell.edu","nick":"weitsang","id":55},"target_milestone":"---","cf_user_story":"","product":"MozillaClassic Graveyard","cf_qa_whiteboard":"","cf_fx_iteration":"---","summary":"Navigator does not free preference hash table when exit.","regressed_by":[],"creator":"weitsang@cs.cornell.edu","last_change_time":"2018-07-16T03:22:35Z","is_cc_accessible":true,"creation_time":"1998-04-07T08:37:03Z","cc":["hchang.mozilla@gmail.com","jlaster@mozilla.com","rexyrexy2@gmail.com","tymerkaev@gmail.com","wlevine@gmail.com"],"whiteboard":"","assigned_to":"mcafee@gmail.com","dupe_of":null,"resolution":"WONTFIX","cc_detail":[{"id":475800,"nick":"hchang","email":"hchang.mozilla@gmail.com","name":"hchang.mozilla@gmail.com","real_name":"Henry Chang [:hchang]"},{"nick":"jlast","email":"jlaster@mozilla.com","id":555817,"real_name":"Jason Laster [:jlast]","name":"jlaster@mozilla.com"},{"name":"rexyrexy2@gmail.com","real_name":"","id":463956,"email":"rexyrexy2@gmail.com","nick":"rexyrexy2"},{"id":356256,"nick":"tymerkaev","email":"tymerkaev@gmail.com","name":"tymerkaev@gmail.com","real_name":""},{"real_name":"Will Levine","name":"wlevine@gmail.com","email":"wlevine@gmail.com","nick":"wlevine","id":68465}],"component":"XFE","is_open":false,"cf_fx_points":"---","keywords":[],"classification":"Graveyard","see_also":[],"is_creator_accessible":true}]}'
var s2=` 
{
  "faults": [
    
  ],
  "bugs": [
    {
      "is_confirmed": true,
      "summary": "Navigator does not free preference hash table when exit.",
      "alias": "firstBug",
      "comment_count": 18,
      "dupe_of": null,
      "regressions": [
        
      ],
      "target_milestone": "---",
      "creator_detail": {
        "real_name": "",
        "nick": "weitsang",
        "name": "weitsang@cs.cornell.edu",
        "id": 55,
        "email": "weitsang@cs.cornell.edu"
      },
      "creator": "weitsang@cs.cornell.edu",
      "whiteboard": "",
      "product": "MozillaClassic Graveyard",
      "status": "VERIFIED",
      "resolution": "WONTFIX",
      "severity": "minor",
      "is_creator_accessible": true,
      "priority": "P3",
      "creation_time": "1998-04-07T08:37:03Z",
      "cf_last_resolved": "1998-12-12T17:06:46Z",
      "regressed_by": [
        
      ],
      "url": "",
      "id": 35,
      "blocks": [
        
      ],
      "cf_qa_whiteboard": "",
      "classification": "Graveyard",
      "cf_user_story": "",
      "cf_fx_iteration": "---",
      "is_cc_accessible": true,
      "cc_detail": [
        {
          "real_name": "Henry Chang [:hchang]",
          "nick": "hchang",
          "name": "hchang.mozilla@gmail.com",
          "email": "hchang.mozilla@gmail.com",
          "id": 475800
        },
        {
          "nick": "jlast",
          "real_name": "Jason Laster [:jlast]",
          "name": "jlaster@mozilla.com",
          "id": 555817,
          "email": "jlaster@mozilla.com"
        },
        {
          "real_name": "",
          "nick": "rexyrexy2",
          "name": "rexyrexy2@gmail.com",
          "email": "rexyrexy2@gmail.com",
          "id": 463956
        },
        {
          "real_name": "",
          "nick": "tymerkaev",
          "name": "tymerkaev@gmail.com",
          "id": 356256,
          "email": "tymerkaev@gmail.com"
        },
        {
          "id": 68465,
          "email": "wlevine@gmail.com",
          "name": "wlevine@gmail.com",
          "real_name": "Will Levine",
          "nick": "wlevine"
        }
      ],
      "component": "XFE",
      "cc": [
        "hchang.mozilla@gmail.com",
        "jlaster@mozilla.com",
        "rexyrexy2@gmail.com",
        "tymerkaev@gmail.com",
        "wlevine@gmail.com"
      ],
      "version": "1998-03-31",
      "keywords": [
        
      ],
      "qa_contact": "",
      "groups": [
        
      ],
      "last_change_time": "2018-07-16T03:22:35Z",
      "op_sys": "Solaris",
      "platform": "Sun",
      "votes": 0,
      "assigned_to": "mcafee@gmail.com",
      "duplicates": [
        
      ],
      "type": "defect",
      "mentors_detail": [
        
      ],
      "mentors": [
        
      ],
      "is_open": false,
      "assigned_to_detail": {
        "id": 1672,
        "email": "mcafee@gmail.com",
        "name": "mcafee@gmail.com",
        "nick": "mcafee",
        "real_name": "Chris McAfee"
      },
      "see_also": [
        
      ],
      "flags": [
        
      ],
      "cf_fx_points": "---",
      "depends_on": [
        
      ]
    }
  ]
}`
var o1 = JSON.parse(s1)
var o2 = JSON.parse(s2)
console.log(typeof o1, typeof o2)
console.log(o1)
console.log(o2)