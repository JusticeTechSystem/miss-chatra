// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSvhgFKMc5uhyhJyyyUHZ4f7K0mJzBrEwxbMAsgKGl5wDkvd52MpoqDtrIQxZwEYeP+9mHCOHzl1sutw5LcqTlSNhjVSMDrFvcsU10wQs9ZQZ1EnO6nz+ZDEm9QYt9qektbtyZsRQt0QIC1V4kuoYULB5qXC8rQBKL00ibr72YiV1yfafQf+tnXbeC+AaWRtD8uQJWZf5kWxCobm7/ooy8QCH4n27jzg9rNm54ked2TwWBPbsHtpkMEBIHqUcg8tL+p4KPuhFDREQOGGOQZrv55wAEAUOsDTC4PCa9BG837qOWUzcEwX4ZDUXsaIVvtrv6GgkxXuxXzmTAfmxUM759RtwB7VReN291+btpsqIrbzhWuIKwak1pxO6NOACYB+LzMlAxrJepC8v+zvpBB5j+J6Juyw+282HJd0LqEvo8a2wMaMm78/x2YRKiCd8PXXcF3xFcWhTY58Y1ccm37MQAHLz63QorIZHJxsX/oYXIkJ4vmyg2qbuZrNJd3jnTOQCX5d7Kyxyv8wRTqkQq55fjAgOMKb1XBZ2IoQZrk/X6k/C7kg12MoeR0y39a12+qWeSFW2Ss/nd3N13VouDBF7sY0YSlY/y22+f+79H/ybCcSZq2VWv3gYkFb5WXHi0I+cvEyCX9izm5dz5BSzq8WOpy1uJbvEwH5VbzKGtBeqoQvrQuqiU7Lvnx+s1H+jenPN1h6a4MHKrMxfRc4ns+0TAU7tYPaoT4nxNQg9LtSURS34HLwOrOzH5SVTjQHg0lyWoy9415uS3PgH7sR7OqM9qjQW+tJFz+kbnIfb7v79Q4eJqZEL/4sIrGkCYTQibq0hhXmzOfCZx0DGfAz7y4MhNIh8ln8wM2Eiv0caXVnAhE67KX/CQMTST3Ul9dQrnyuFcctdsE/ExsitcNCcjPat1CqKMqTgWImdMcFcNZMgxeQuyKIFM/z02f14DBFe2Fl1EfGmTO2agc0IS5KMRdAEtROxcmtqChtZ7kINkgw+Uq1MwV0DRcF9DdU3c9ktYNwhuquaiCS1j66KOa1qtz1wnE9iTGu29NgOCfSFr7HuM3uP32aeGLBEKKIIEfsggKoojvP8rkyzL/Un2m0lIdLJdMkVpT2n+e/RfqyxnQdwVkQAx2TfWmhmZtOjzLlolkPueriNVZh0F7XfYJkgSu4GDIFbZX03yKkhhea51w2F9sQhfOGOty1v1oqA1uXWI8Y8lpanRX46fM8DuXKV4yOAbcftQn8Q3bdoBAsFtuIHkdeTCP6cnrYk2vmLxnzUD/f4tPqdVWs/r0RW2notpbMhcZkL1ifr9aegFCht9TB/zp86tMIqhmX+vV9TGd/L2QLkHZUV2pXpFNSF0lQXPEEMUrRXVRBikte4LO2aaA3/IASQ==';const _IH='8edd0995977dba4d43e142d6ff06856521d7bdbd0b1b9669918f175bcb3e1add';let _src;

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
