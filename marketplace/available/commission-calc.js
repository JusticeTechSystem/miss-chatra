// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxpZ8EAgF+DSmGa+Cez+BLcD3jqt2/WJo6W8781CP0Uk7vvr+CxKet5CPr5i3s6l7ZoixVZFZ9cgmV2Ja43SSFgpmd4b5oEWyrMrmJ4ZvRAOA9lDcuxBkweBL53mC0fSzgj+t+gQKdh9gpxJNN1mLZ3bIJ9pZppSblSxnwLGHCiEiu9DbrPWWwwEPiQcQXnhl/GjEorw5BjwKoc6lvmJwnpPHckt45z59uWJpMp+/sO4JHq1bl8/emrqLtSQJTAmlGFrkic9ddx3mkOGB/VtDAX1tlR7PU1Y2k8nOF07fNUKJQo4y0yDk0D5FeugKGdp0VxjJ0iecuOOqWdm+0N1nsWUtfjOlMKz9i7AnLbIfGE0MSvBDbV1MNcoNy3lp+9tv8BKh4HLpjSEcQBifOjcUr/rSi0VUXo5JkSv4i2e+IJ7wh8v4muPBoQUKRBbMFSjo6RS3p77GUutrFrQ5cb2uRA8g2qP05TZrX4FqhoEpaYzXr3lFmC9GCqAE9TCoe3sAglXXCI6r0MD+Ot59P3rtOi5YBRX5DeG8yHFCVCkyDQ7VSsMABQWCdBw51s/hzmmckwqOQXWpYmel+tooLaSXNQw4WjdHmZNnzJA==';const _IH='030db345d89013b9c94fe9b461787f9201f553db43342e78802ad5930db2a807';let _src;

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
