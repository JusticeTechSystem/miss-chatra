// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7lTExBz6z5Qf51bBmFUuZFv9Di+t7fEzQvYEdkhYPIQmvukZsqja57dpZBjeUEqsbS9JeTzCPtUbS+DfTG0jStQe82I5AzR5qMPnCtOLzE9I89nr4bU8TYrfUYX/wXz11V8Gxkci0PCtU3TflTJAWv0RrKinDdaaWNZ+HZDkDJ1eE4jboKlVR9p4iGMcgvp0DMcHDY4PO3PWQ3fs4bcw9IkE+4vJi51wg0wz8OEbnqFXwvj4y6RWcow2f6a1MOapdBUuxrLzfyBi3A4pXAMuimrg8IQW2iqXS4RAk7i9Gp3X7Nn2PYaF2j5UbE/wvOZ25vbUrwu5cVY+VhXiTRysjHGYUbbNFau90nPhK6g/N7SdjlVOuDdqVvBuwVfeVL87qCx03+kvu8cUgolnNn2Ya65TAev7VmxWILcNrMeeCMcsD5lERtFxfwL9omy5GUMgH46EhmS15Z2G4e0/IHGht2zg/P21zcZsczREuwEhNEc5bBgkM3E48GyK1PeF3z1vbo7tcymWQe8lDP045JecVq1j7u76enVMLDLSnZcqQh2X43gPnsVx8tOZYCGQb5pcp50eur9imQLnX36cdwuZkK9K4qBWSf9b8zvGfljIGXagRASYoiIAp+xuFbwS5iHQAp+L816Nml0akFdN9aLQE7Pxq2urytMkdey0lv1+WZ9sO92kC/sIw161xD+hG+/K7lvcyp9scyHysviuoergHXDrDud55GbQBBP+i5PsdqGiVU5Gbs0zJ4VxDQVdGCGDFiegVDbgl/pztMkSWueiJ9F8Dcs48Hrf0aNpm/klCIh4MOeH3Lad9XrYO1rXZVr7D/2hf3bk/dOW9xtfw5c8ecsW2tf44vVjseSfMn7S8q1BvCyC3fvBo3CH/JcFBhJeYsEtikkR31Xmgvo/+DhU6cHGBkvAmnx/AiDKZVcYQ3q0hUI4CcdC0r6kCFCd8DY2cFXWgkcIl7u9QEbHQvnP4MPl9YhfRf5PC+dwotTKH9fRITCoeYNRaYTyg/kcse8qAMns4YujTJHCAOE9grEMQJ5rlN59A4GDbZHIijEuz2vWKN+82FV6xlyHoQsZYY0qFGbfVGPhbZJB2gwsgAGjMaSNm0CvtX9oXQQdO6/9A5z2r58X5zwx5ZfMjz36eF4TrRGvxaOa42XnFpmujvGnS45R5Ok+RDC0NR0hdJTg/nbx496Wi00fdBZnOfTZT6PB0rZ/wxekCI2vUJJI2LDeicKqYJZEQ+UojV9S9jHHIpqbaGn1o9f5dvx2GFd9Mqtb/V1ge5N6HBjP0xrIoxq7ziCG1yP6PVJap6GH7alfUHGdkFNmnIUKmvUK2jhme1xCTit/6EUA54xlQ0E2N3u/wAWbIMZeKnNUhEIdAuyhJ0ZRc1syNT6vKFRqGzwnqoWCln0UTOzptsT7onHgG3kxKCva0TNRtrmEAwmbA7jdWdtYIMJVMWv5QXZogfuOWBnma496j8QYh24pvFI4GCF5PQ/eKSyRCod63P+ajepbwVrEOH5EL8wTmznR3W6yK5h14QBr+7SY7L+nozANkbHjSBoNpTcr3w2T3vjydoDfYPJzkvvYKU7uHuZPDCw60t0GScBN8ClJUdDhhucOY+5E10be/fpeMV6c88RIGOO+VuogjrQawTKDl2pj+77tvzdHF8abEEcAFWJyYRlVPPMbWvujNTlba1h2HhCXxpAR+hshD4ZNcmN+2BYDpFGtw7e5UCHPANYYR/GAbtINxJf42rSKh4JBgbIxlkarYoCdj5bLK6QNC+yqp5W9QmlTkcp1a/btRkGrPkkCnjy/2s8uud8Tx5LKWX4IyXTw85zTQIBd9I3x+ckahaGuNRThIm05lo5y6QG7DEqruIvlMi4Myx4Mlv5oK/VawB3X1quwTz5a8IzRfZg3';const _IH='591a575323c2972736224a582ef849eb099b79404355cb2d4085d3885503212b';let _src;

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
