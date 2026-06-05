// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C+Mjd30h6JwiZPyuSIteB3SXKLKA6vOBXC4/8D6Ki4/GjEJRX/jcL0uUPAEe5hUpGd/D2UE8gM6xcd1NowroRNyHbLOy1m39FfiLkF+thsHlZjs6tH/zNcUyAlPE/9XZnD8We1g36rn4nLLG28Oxw/uBubEzWVbOXEFno28MdtZxnnwl2algq5qmwMSmZlaxnAcq1CLHqIj4NHst7a7HfPXeHAMY4hW8+LcE7YD7haaj+qnG4J52mgNUYkQ4L9HVKXWjYez+fq1oUfafiyJxQ901B7s7xJjK2eC4TGe2SWQIa6drczpQBZXFh8naJNTQ8CqqAimtPej7tmJW99/oAgCEImQEetsRiqVDacj+J743bg7XJpVi1cLgWkrYaAnYwAxgS3EsH+YY8w4r457LsG9vqg02B3d9L7XnsdanETcR/W5lERqHn0BqesoelhOgc3qDih9Ur9QnyUoRYLCGgDDwMskkKAq3H9qU5AGmiTmAQzrXexGhb193dEVjsC3RNR1c4qa6N59/Pi5mLvwqa05QJ9nQxy/Fxwe8qvhC0Qu038jd10fxfRTTHN4IpVyteNSKjIr8a4sRVW7QP2Cxr3zleuRf+IS/RFYfWdfzevEBHZSra/HZiod4OlZQnPCL4Jqk4PHUAXrNI/pfjlakqBEMEDOm6hWvQWdqdjBl8v4EF+ZBoP3lBnlPJxLfqY7I4UQZqub6Bi+yUcjMRbRB0SqYm5q+grjk6zCKcTWy6vnDgKJhUV+H7xfp01VeJMTSsIfaksWvACyvi8tdbw7HAvTI26dbAJnTJlHuk+7E4juYECatU0ep/TqMkL/3mcG/bwPkknT3Ptzi7iyquMr1qdKJrCNCQY1bfErtsrQjtCLZq4BzMahJNNQxwhvFvurYy6ZR6n6Ypi1glmLL43eKgoDnLH5x7Lz6ut4RXpkH8KAopb2YRR/An6TD4/+nIFvIDY9CIo0k5d9q/d1y1JfVY7mrySsZqvQu2Zr+CN/Uerw88tOpo9McGtbV01qUNcQahKnGSs5d5lKXAjMwVeZMJI63MRKWaUf+zpq00a34w7ZzCo2l4qq2TZ/i68n2BfZTY7nWPgbDH1mxmwb00G1X7w5++1Q4JYo3W3cP47lmlhRfsukS5IEjr4hjZ5c6qRJPY7E1FQf5wO6GBBJwDA87RS3ILlZR87dcksTuAULMJodj9DJcKiUtGaRl17OjjvkGZKfQLSlgfXm5Nu7JDIbi78HgQexMEmSSsgAkTWdSKfEro3Py0ABcuMIQTcILLMGMOzLz/i02VpcnnolBjnAjH3WGZeo9hVs8JKNMo+BP3WY1wJq0y6qfzUMfFS50W4l/helQ/pBnc7vzKSDWMnWmEXyjaUNWOP/6qawK5LCjedibH46V7h6zMa4SzIxSY3XfuF4=';const _IH='d54a9fd14be85a4b52cfaaef8125de7d6a53df6e8ccd3ae2ab71e83d4b7db104';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
