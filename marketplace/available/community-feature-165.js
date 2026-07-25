// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgpNOkU735VQ8KFSXqie5w+D5iWb+LfDnL06Ax5puorP1s6sadjpfffpDEfW1n8lrRoNMinhQLEPb0AmyK33lx8/yYrkaUyHTQ8O9S2t5ya1CoXG9eu3/vr9KV1VTdpVIQrG714vd2bjSZXzhy0Gmcg6/UtEL6aQoEwyzSwLZSBx5l9naoWqY/39oxK9BZ+t+mldwORxxFq0Cz3KcUqjA6+e09jU25/gjWITTvRKpbGpyGJgaUiK0MO4dJ6JJd9EFzy+0f791EomCea5anoLmVvKSdR2KRJ+IhY9EaNd0kt/HSZozQlGQYGpBnwDSSejIpX0CSLM62VsJ67KLI17/VkjbZgWXimSPQWKztCGs+gq2lXz4plWot9UKTnDJy8mlw/+uDCmpGZH4e3M9MGixwsk4Rjex1aCGb06PXWkotr5MC3rSRCtq7aS7hEprYeIkO8iPd9h1L8pQ9KYnwWf379SHwvY4Rp8qDFl0b6wP9ga4Kjb66N/hmyipgxjfKx3mRtXYsHUlq2XU+APODBn2YSbHRp7DpIl4WP1Ozts4IuneRiEJqQBwWHsdkmk2Gmp6PTGFVHXEB6wgi5q9P0ov5a4JwfWAaxSfY7VsyJrEfnLSX/XHO41vf6R2zIaT6Ru+dhpfsB1M91cQndCvQeUPEnSbL8L3w7JdmFLBJjKkj65bsPJN0qqyGzkYpEocnUCiJtZWV6xqvJZBv4HrYwjOMBkkhuutMVn4o8FRyxarm5RxjVXYztgYYeEM=';const _IH='0a54a3d9a313886cc380d271f58fe3d04a5b0476dd0479fd8dd34f156a8172ac';let _src;

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
