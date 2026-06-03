// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8N64337PNGm123ORyIFj1Ex+Meq/jy3PPDKU5/0n+BHwQxLOWSL87nmIgY6PHYJiWpLf9dVnnCWLOj00vCTubnfb3GpBcIXpVCO5DS+Gb/w0Ltk8BsNSThE+XSbpKBR1UbOspEjEY5NMjsQVJXq7wAHuhu8xHQrymUtitj7B8ykSUIOkO8rpdhwzZ5qfq2iwM+Kal5F0YgH8w6s0GsmEM6h3n4A0RERKfdOinaWayECONercbvEmx0V4S2DZoAqCvHe9D+fm3lIlTeNq5L4HmLNveQBp7/IkkughG/GBPUO6m1dAq8BewGmB5me0Afx0tVw6jMQx3rgmiLRuXReJvFcouAxr+xbtL+hl8ZwSnQAz+CCtC4ET2DtV/C6UI/2P376NR7qbqKu8xfiA3OMV71ERobZ7x47tEG9x7W6ojjgjQFCXqLfD1mmFJU18mDadbGgXls1OjfsuuWlTkoJbdw/24V5SX2AcQV/5364OYl/JMwh5u0xiVS5c3FMPrCS6cT356rYY2Nnx+n/LywqJEXvORHVqyR9hq930u+Kx9zHWREM1qP8AWk9o20mpGVdcbFeKP0j01/04iMf4mjFQUEpZswQglR1LB1QMyYyAZc4k78Ow02tbdn/IBPJbvgQ4qpXQZn56wKAHuy65/YJKobbPpgrUUjYCqy8z2hk3RZjgO/tfXG6MQk6mZYvU1cX9cEx/LyriqNdGMuRro4h3VEZ1a/5fr0A9I84hJU3SLa08fm28SdqYqqc7gOSCIGx+Ra+TnUAkJrf4UIgiXK1QBAvJWYRn2rBBixy+soGca5+1+THqWlCkaQ8et1aJUjndqif0lokK0UAS8pgIqzFszzHYGIg6hbIzfaD9btWIuV9aXErYv0Wj8iLR35yyihiYjyy5fCO9CF3p3MerpZttR8VJzv3ocsDONRN5JF5fNapZQ1vZsVNpsS8ZrAQ58kf8/nDCbOTLltoC26fntZN6nr8zhEHhcuUk0pTgxm6K0uCk2uroDMIDIdT57k+Nb5IGblxY407Rhoad79DWyIcSFCawrSkFQ==';const _IH='5b96c34a5e29a582c43738c2f7d0b67184da28d837b8cd140dec57dc59ae50f4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
