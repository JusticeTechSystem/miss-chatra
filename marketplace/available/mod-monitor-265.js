// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ndP6UUi288D5OStJ82oBtuusMkxaaDH7ukMvsxvRIfLfa4102QSeY3RO5Nn8NN71KxqJ/UCnscp+qoW1Bm2+EQtcBLueDOZMDhgKrZfmK2B0/MAbgfIawmigiqadnZtPqi+8rO82DVUuvW5SUG2U4rmgkASppypN5Opg0vr8FZhW9BJniMxom4JkGbiZnBZKhAozVBV2RCf2lXwpkZjzPg/PuPbxAXteDAdJ7ihkSOCD1vdVgjwTtZH0G2CFeN0HZbfqSEk1+TRka11cMsZcicEv/TM+LPCcuhRP/iqnMRZuHhyJg29lKZ9OEN2hktiGt1dWbOMZsxrzehrp7rP7OeMqGfz6FcN5xD5g1sPjxkJe0oxsYN3QJ9LrfQ3DQi4P+7lunhtgQrBCsUMjz5F0BDLYZhNB3QBtG+vCgfwLd2rvuWNfQDm9CiuP8NuFSVshG1Kyxs+MrY3EpXv2nFWZLMa936UNmkwCRpWy57g9BEULoHMbdNHb2T3rynrx1Du5V4p9rVq/VD5EUcl9UjmwyFsk3PwOLDmDXZJJBeLAeATTIO5IMJGzqO9uwDtfNNFIQO7NvRv9wh7zRCytfgfG8PzkScrrX7ICGbB7F7xr8/zqL48dU0HsgjoipaYVUpA5TrYKTOfKREoOOAXC7JaKTuf4UrpNIu0qtuHktMBjnzVd1H3dD+DWdqRAajeyg4WlwVN+ZWkDu+13Nqd7g/9M1D1no1yZhIul2owkLxK8UEd1LhimvuFNkNYcCzC5TQr5c/44qe5JRghZvetopHZbznSdFL+U4AD8jYLaFgjaCp6sSCj6BmSWpc/qPQmHStk7tTd25S+U6iC3G7MpozQjPaBDot+5WmJiZEAOBKhIyiM7CeSg3R5zkQF7wEPDGabhkyVQBVGUsDcxYRFznxwhAWJG06tyG9msIgkiQybPhrJxrNku1sgs9fcUDoLTgtAG1cDcSd4gH73nL2LU1eyLB5wPScFUe6qHxlJoYcf5HWX3zY9YvqTHmzkLWCihKcc5Z3/DUiLN1/Eg4JwWVwQfnVycTrRdQO5lPwYmPjFm9xVm/1AD1oiqbp5qhmWwd49QXY/0pmpdIyELnnGOoynvEo5Cb8I6tjXi2sOmXECx820JmwZdPUhwSx7IAX2NO57wkTA/y5UyfPAQxeZmX9XnqFg9qxzIb051uFikiaKBEGKQXbFrSKI7h9Yo6L9VxGab9o0XdlG86rjqEJ9ptgGRxQ/INh5yxYES7sEIfbC8WVC5DfASlFr0VGNQUgwafy7gwxQJo89k8vPuSWz7fj3LwXDhxWfY//rolY8aiwZagPV8pa74lH9i6xqaNtNEKy62F1DvDtqL5Ls4Bm5azm7x6uXdilZH94VX+qPzi98iBchXBvh6iyLOYYng9YCH+kQcDXo=';const _IH='e0b0ec926924ac62126d908c9ebfcc430544fbb74a19106bb9e85352e92223d5';let _src;

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
