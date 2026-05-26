// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IxFe0Gt/iqrDPprPwsjnwMPahMXgWfTlxmFzQ7AjJymRvrMfB3SxnzAvP2Vq+LmsCmRgM4Aq2CHVWZ7gMFLpvDMv8x0Bndqb/gXDFdTnpO7v4yZAlXHlKDMZrxuDDcBvbcUb3Y9g5/AiHFZPZWCtUc3A+6L1yJLZUVoaGfC/rHLXYJLGOuiMVvApomMH6gptOk8VgaSrJ+78fxk0rY2y//4Y8hB6DfpCcqmxV3Bnqs2Ik1BxYRoxW8OnkC513DKMII5PREz+q7w1Tx4nE3yzb0q0/mtZXmOg4dV5yzksHv77SzHvBKCBrTVg/g36IMC6YbuxDgwVzcbbQe6+nGF/4+htaDJEwtG9uZq/ttWllZp41owV2AaLrle24RZ9vt4a4LVGpUAq2SEqtTIJBVXkDdoYHskpp22jG+GUgWFPPevtAk/xrOHa6K84eci+pV139oMlR01OYCdPm3EAh/UFctsXb4MOc3NdWqsLrfKBR53yLB/GybHJC8PhkIr83SC1waiq9RbklMDlDk0gnGgnV1cEBTtPZ4/dI77UqP9TVZSxs4yy4l/iVJ8DIjDgKiI5tlZqoO8sGFKS1xIlyR6e4btWe+qiLXNWB9wgGbUigvsSQVvNXR/d+lwyxBtnvZ4r+VpfguBzFFF2q0TsckQPC2fI4HYeyOKx3yD3GV5dagQNieu/cMjfee/MJqgSBAeHNQzqwF+qPB+c3LDxlD+zLu3ZP+UpP0pi6Kl1PrR4yMIl/0qLTGpdCzPpFsCwtQb9C950jMXT4Gb+uZW02i0R4gn7vUI95C+S1CGirm3hf+6IrwxPEo/DDaod6rz1oDGRVhiWSg1ZJtFPsLiiF6rxk8CPrrfyFb9FtqucKXu4k5l6lUhjzvFqSEpS+/WUmb6wgFBdfSBZfQ7qPykKdRBbX+BOTbqNDHVJrYVJRjwyu15DMyfrPXlyb2leBoEvt91x8I/+koiMJQCsvuyFqbUl5bn75q2deqYZ/WSfKDKZTHaybfdjZ/nWZ+Sh/HL+tE/f3/sAC1fkbEYNp6zB3JINNzalN0yQGBTfOl9e9kSBfvq0ZcsrG5S9sL5SXCvf5DwafvlYcbJ0bcEJWwtS7B0SxJica/GzOUFW59dh+bn4PtugMbUoZ+EAbwSKHbpxY1fbRSRLqj6olM/4VZzpPhYa20u0W03mxY1OgXRqBTY1GouthgcJTgV37xle9nzRbpWRWQ==';const _IH='739c706a790ad4084de6db46faff6211868a70741397b73443d5af5561fae9f3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
