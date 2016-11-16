##clinical:hl7-resource-binary

HL7 FHIR Resource - Binary


===============================
#### Conformance Statement  

The resource in this package implements the FHIR Patient Resource schema provided at  [https://www.hl7.org/fhir/binary.html](https://www.hl7.org/fhir/binary.html).  


===============================
#### Installation  

````bash
# to add hl7 resource schemas and rest routes
meteor add clinical:hl7-resource-binary

# to initialize default data
INITIALIZE=true meteor
````

===============================
#### Example   

```js
var imageBlob = {}
Binarys.insert(imageBlob);
```

===============================
#### Extending the Schema

```js
ExtendedBinarySchema = new SimpleSchema([
  BinarySchema,
  {
    "createdAt": {
      "type": Date,
      "optional": true
    }
  }
]);
Binarys.attachSchema( ExtendedBinarySchema );
```



===============================
#### Utilities  

If you're working with HL7 FHIR Resources, we recommend using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).




===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
