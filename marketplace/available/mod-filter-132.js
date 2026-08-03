// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8TIDQCzwJnPE/VUOpGptGnkdz3QY6uos6n9KWIg+Nfi3Nz+z//vzD1DJk3nBRtEHUAYnZR5jiuows1FWXRC/mB+ROEhsA3SKlarh0cyUW+m1+ZaMrf0ppfMDU7qRgr3qvNBVX/3Jc48srTzK1UZ8phiu4xUbGb/xSNCoPoxubnSkm2o0lkmhbFTcc/7ZC9iHdAueHv9nDJgRt3esx+6Mtcl7TsG3cW0pYArFtjFMWvjC8gqUS/RRDcv0yYejMJNEmQPeprULlvURryH1JgzyU2Dp+3D46UDlx0jnKBs23cKY4xUds/wBq21/47u7Tuhu5hvXltXSflDWG10x/jfEq8YTIPI3RyZ29NrY4+B+qRitRj4dVNqUD3/+Y5bOaNHUsNId0MiVUquWcPEarFwrXR0kcCS6PN8moWzCQOq8iWzBZ4pDcpXkk4GktUoCponCUAFkMxupsEFjI92aKRNUJhKH2u995HcIcKVWxmcGoRKqnVmdb4Sq0VtLi4u1ZgW36dGgCBJmEKti/HEhEUpQexwi9bj7a5O0b2JQXoBnIcJJf0ud19/HHak6HvPd+dNqUbJ9nFAs01xcJKQM1oe4oNVhLVfszNALMDysOqL2Y4b5Zt+nddJ0ctJqJQjdsQA7zi9OI1Cl32XXLefX3eMorqAuhbSnbqpCGETHT3R6gFvxy4td6qKGMDbdYVWeWZaDXdaulOXu2QKxQcVEKocG8kWtzsYSF81iSAm99p5apQUSrFI+qqrs+9xe7s/ZC6D6BKdQiuYaQ/VX1be22ow4N0EOv9nWUqzFjAH8LhYoiDxpUpFUHPJHodxW2MKbZ6fr49KicuIP7tLR8BctsugYZWLxbTcUEKqZ8LW+zXuuype7qSsQ5zXZqKPkj/KNOSyvArY22r4gwdiUOEq56Jj4QKVtI6ZIPhJeVv4scr10EhVyUpLyBQC1kkq/nxnI//KaumE7B/cIvq3dW9vxa7YTIP4x+7+HXgNpaAuEwGHbX8cibBMYurQzgYJdLzfrcfY2bmHeTPdsfYI+atPx2yUtFQqoOIhSAVnlF2qdy0+yCBu/UfxK0Y+bwzMXYgD/3dFNH+CnIahutFoK+YvjgMEOi4iPX9a0CArCRV7rRzwfLNwgcIoPxxVJtZv1MGCQcEZLG8c9QJaqFffRtc72lr/Ocfj7qfXBo15XM0H8nJees//0nozcjL1qmDHRS2J6GEjzx0dDNVw3nRuUuZqwJRkZMQU36s2BA9KRfHhLwO1dl039oAt29znT9o5uH+tBVaJ0GSf5d+Otq+h5WgZmYgTmnIB8rlFMrAqiDmZOAauRY7SZjAZYu6v9ORyDN7FgJQeO0LX5cpeW6RgMt4qQY+J28DBDGvOdsqMi1umqY8WyBwaKlIeVq';const _IH='d8612ba66062ba18fd3509fe2ac2ee26011867e8977be12da73703d54416dac2';let _src;

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
