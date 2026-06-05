// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lC0XpIF8E0HLo9oWrFR4uyzQw8CiFzu5DTHhPyS2wF4yAyUu1vrWZsSrfJgwA5zuiBblJNdp++2NV1ohCpuU1mA5gzN7a5qzVx8mhtA0LayBj1fGdB0sNVic5gWO2CC5fW6b2zaV58ZMgaK9cM/bXndfTKRjYcQmi/ngf8jAkTrN/O3XB2w/MKfsRkyhZjeJ3dV8Wudl6HL7lHrQy71CtsBDiKQdGR14S7XIfjqRwTXp4jsPqvho1SDaFAbo282Nivsqb9WIhc4/6na4b2+H6dJlj4wfkWBVHFqD+cOKrchJ875IjBM7+pxP2UhXb6Elmc3jtqyKLJIAhJzS/WFhUHPeXnK+VcDAqoLdLZ01nUhHHBCmJf4AC/DWQ0xzfiM7pn1hLzY2JJbXtwh6Oz0dXj8oep/wJJ/bqCgiHDD0cTgv6Eq4enDEJdzy4LH7R/Ug6XdF22W8BwTd/wXEoZhjCG1CoredGZPAmuDpWX6PoJlcNX1O06tVc54CzULT33Fb0jWv4CdQJnUyLHIFvjbpaqOVaILiHJ8z6WeIJvGfscmycanxbE7IFBmw+7ymQzy2fVp5rcuOJGaSmj5ja2Tslugst3Zqoj3+vXlT1odZXkYxghrvGQwl3FlLcc4mcdYSX3p5mcO7o+4lqK8DosS5479cASA3sQPyJXmPdDjR6W9OWMybYPay7AwizN9wOzelQh6fJTqI4k+li3dPpaOV4mItdFvGtu+TP5kblfTdXJSTGF+J3BXZpQ3VdpaX0DLSpLCgq3nte643smzRuo7I5i4qMzvbqIi/xkY5Jwh1NW+3fqOFRB1OB1JmZdfvadYAZvsi5wcrjODcB/l8XVWRxId6IMlFh/WGtRJWPbl3M0EKeWaOK9mGO65NqG8sDQcPldwlQ4q/5k3sN2yKAj9tpjh1YlDB7G177aPbuBPehFrE147s6QFsM4OVTOyoSevVYnK51jCQpjYr91wmZ+QxNz38Y06QU4yxMLCavR410gG+NWQJVseiJQUQiRAYsYFcmQ==';const _IH='fb71a55b2d6f4a78faa9de8513e46f61a909609bbc70334abe0dcece3295945c';let _src;

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
