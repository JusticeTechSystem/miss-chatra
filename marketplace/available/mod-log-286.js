// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjNq00IGkucrORhdPkKDCmgCB5ZKQnDVIp2YiRugykbfzG1Q9nU1wEaGh8AZOTh4SeGKz6dGQDZl5ZBgu9zlwqL/naozRjZtUvQGJqKXif8CExdhYI1CwjwDC5T7+30IEx5fezB8+R6wY0H8Yv+tWZm5HTtkuFK6y6QfgMWkipEhjlmVr9RN5MfqHiXavVWSfg+kOk9uKgW0KMqXLrcpjsXoZsgRCVWpss2WgoR+VT+iAx1KJvgiKChAzGhMpc3iBt4g6Heevn7X2l5Sp/8e15sy3Eyy8pOhenncslusFm3Hn9XtM5N09ckbxE9M37TUhC4XxiTIZDnJEebk/7DR+jSrFfiohXeGwQpJQF0AeM+FWNNwd+AP3JFDPV4PD27Niqb9CNKhYwXr8PQboiCakAWAkpHYk3BpLDOTNB7xBiBoPgbrDkxq/jZHocsz1DXlYgLefL6EDrVnkFZIaobB2zePvmIyGeBr1QLXyYG9HnWq9xPLgKgWXPsDV6eg+sPQY4bR08y9/Qg0Mmnj15QmvxERuFoiX4MwqbW7yb2NHIzibJkcRs33tCi0OilMdbPu0Ts7QL+Qzphy3AcNfKY4fN52Ct1DK2h2VpuUO+m1y2oo5GpzJCfSQCgPgcd9Pzs6xlB8EszdeGGhO/cgZK0Z4v3dzp8TYH9Ec4QMU/aDFV7QR7KhJ09ZoYTqtPT/LVTxVPNZ6+iYBf49QNcftgHkdh6/278IiB7ya+N8n+fIgFj8rPwYDFmLsHT5JW+l+aapn96saGLbrhMmG7K6bv+4x3N7OYWj8L27IxEYpYww8f5ZpgHiZWfcU6elGCAnMuJ4qxT7xqO/mIAuuMg7BAvrHcWLoWil0O1zE1KYr2VeQ6DoGBXey2fJGmHqd+3AVn3G44h/8uR4ZSmnRPYB/2pJqelKnlFvZlIWSA81ofOa49ypSpHy1Vo+8TMffJEUV1tjjnTD6rhg5cwIR29iqlLAhtvn2rzIw+SJfThq52LApDvbegQ1Iq68OyYLc5PehpuW4UbfBarAHyF/tigX4hNXTMmJMuaR6wOxIBIPy0O4svzGfrlfY5Yt2CE/CcIAUxXB5MTwy8m7SDYrULm0Vm6ms2Av7ws6Oq4TKs1hXRVxyS3h2K2ZbJj/9lO53oL8EC2afW1G0xhbGpv7NKboVfK9pMRirkkZtecw4/7JXQqIyzVDD03k9UQS3JUSO4ptKEriMdDshBXb6zz2jtj94ZpnvM+HyUP4bSKX+edPeY1UyOmEKt0UrzoVEqZQm23LcbyWQocwwZ1ZRKLqbPjyou5Jc8FLHiMhjdQerkU/B5Zurj49PPXRYuN0bWTELAiSZTHH/h2P4bMUMa';const _IH='69f707f9a898efd81e3920355c3c466e106060d4b5da897779966aeb6b1d2df8';let _src;

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
