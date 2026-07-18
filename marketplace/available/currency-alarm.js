// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNdxhNLDjnLd51BlQhqFQ//Eljz9wJnJdXZDVtcL6pBUcyeKL1kxsfI2IsaMIDpsgq86O38UPQsqQO9IxaH/ArEXiaOW8FJzIke0IVx52sBi33I+OGAGKjPVCDHbMGPnhzRv8FLv3WxPq2m8YqxebXtKQHE6FgbXeg+lzP2WFVM1/pPl0fI2iX0EF3wOXrw2LoV/IibjCJ09ZqcUznt23cw1eZNjr8oPgtMIdDZMh9TTC+HIXob66tp32VqmIN+gktpVRgya7ClORcL/qXRB5WJcsoko528jZ1IJQ+3gD7v+1DYzAbdRHQEyzSs5PAIdQRSpVeTTdA5oSlwFVVruYUp+L2zca8jNjNN5fEeKjlAN7CEO2ANLMyGUuW1wtHfZAMLBb2KMPbu/eKAZSDkG+a5mdoYZ5HY9/J7aR0sKnJ0M/QFAEKYvUe7ofMB/Cwd6z3gttjfAu1TEb53Tv6rFcy+1cQK6UBfGrEGqqhqWhtLH2d/eKABrFPEXmAG1G/SQsWIL/eySqUYaGD8/Z9MWjfdMt8LPB7aCDgPs7umEfRhv+5dG8zNWfFKpkrCBsarG8V/7dWGAgMgFjR0HRHU7ya0N8U9RCni12k1lR+HO4/vNw6uFIjMTA60k8mRd0qDnBoBPlEoRX7L6Xq21j4OGXU+FYrmVy7SVNrT/ENLNlsxV8lKgXbs1TFYSNBw4Q2oRAXYX+ItKfyhOIytTH2Q5S1MK9EmJ6fhIi4Y1c9BxhC+i542nVyjK7GlE1kubLg8kPHUEnB9pnsS3klI23lMnmzAxZLFqcD4WhReXxWel9fZgfrgOw2IE43UhCi2ai4dZs/SQJbw1XfKRZOq5rsZWq3VBJomvfz5ok0URSSUwiGXxFjBQQxVbnwSCf+y2yAKejpl95uQ3/JRk5UOELDiioxJAhszSivYEr2jwRbSU+fX/pn2DAEtUK2wsFTS+H3yzDFPl9ClTmlRBTOrc355xgpnIgDFQIAeU+7gRQLW2k2iQRAP4hp/8TIUb74cNtEoLCoB9hyIKHDgweimlmLZxgw2WxeYNT3ugSmlzKyCwvUK6rt36wN0x6CrbvPcRy6qM8kuR882VIj5XoB+0prvGWzrFsdudB/2q+lFLvR57pD9flTG4JfbFjo2YtoZ7/jx4LUCFF2jBr6YpQ8OFKmJFgXiumg0KRtOX1gFQuRoePTDMuzDhlndaTwSJr/3wAo7d6HAvGCAu9xUBBcD3V0h/Yt2GgzshiWUxpTRpQi3Kv+b9TGe4mS1ewnNt/0altSjR3S9VTbIIZ9lyxEp81t7eHViQWTmFS7U2LZU50HyrGXvgSQai2XC+J0rVL4DXhl7ZSsfj4nMlfkQmkQsc1p0mNtgGnwhFmPDNipQ/TVUOlxtxybgpScZ8nNYQGGuqXSFy5w+2DsQDAjOLkZVRLEEJXXC/2SuDnLyEvoD910a/VNymxzScVvmoXOQP3Zu08HM8FALEOlbY8jo/ndMPiw8rKtHsLQu4oDv7Bl79iQAA0vjeENNWOqbXe4CpF3WxhYwlESykeqRKPomvFJHEzTKBAS0LIAhhW9qu/StrdE3V6MSZlyD6HBjPhgbqnQJBbEWq+vHQW9aJoNCInaFcmPW7DgxMDjc4tGo+4dojMbtxpnOH5GMc21Qo2e3CMUEBPZ540HF/3LCyUhVbNOzCU4zQvb5GuP3VJolA3/PQDbMKO9m87pBme0Ry5b9Vxf5VPPEXqOiIWtKOX+pB+CMgnrodL35DcgtlC87MW/sbml/3qCFZNRoM1evph2OW3pG6VyE6OY5VmLP8IVXWMIfeQE5NGuYG8HxkiS+Revc1IBIVNdv5gKw7UuPGjDd+GheT9fPw==';const _IH='1d870c9e4b87273796398314d1c6fe3c76fa91a1bb5336e4a01de9066d8a1190';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
