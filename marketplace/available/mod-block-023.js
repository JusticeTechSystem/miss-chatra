// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VrcNrbsleGX6bPiQSb09Pe2hwixxu6Fzva5+W2iXpPZUXpLSzMPGrXauuh31BM4nth0UC9UZ8pNedA1zoTquSuAOIDvCkIKxcGSzNNG7koF/U8hc6Q8A7AvlKmAU4cu3MO2LMcG73VZXKZjQ/Dk8yeJiumdKcERm7Et/4HNicxo9/WgTDJn2Uqv5Fo+uu/qNfzsS+guxd0KlNFJoKpDZhegTqlE+Nn3Bkg99xlBBiz/mSLZ1gaZAElZP+SH5chMnIQL7WFvTs0P30uCXpw0jtVG4AaRTJ+WmvcDZTWVjBp/X0urSHRFEaxnIPT+YlVhWoLlLojPMBmjNnZ2HJwRj1fLlbC7m9Sbv9WhafJVASZ4uFXN6Sx97F+WU6GtjaXr5Cb1QRxwQ6CnA1om/B6KN2UCGtfQbFtSlBIiRndA7swclTlyFMQN5thc3oViTeK46f3mvnx5Xit3xtm2+Fbl6gIEiaAmUWr0m3Tvr1vtF6P78UFDWyiKp2Nxqj3xHza2txSutjBNGG1NXxXExybjkTTwUg/fPL0AW1wH2/zf95tU1FpyC0B6wlBRAnNtVjgp8sBTM0RTjewjtVplwSZbTykbk9YCa5FSt3/WAzVC22jE4QeDctYPojqf3eTEN64DR0eOJ7vUj29R7n7/DdwYlQiy9O8S9K+9ILV5b8P4Sd9YfxVMqbmGj6gIIEJJz0kx+PDzdBAzzzoAomsXIgBy5o4ZCblSVyqkidjJg6IMZ0QonSiD5ERiNC6FPJG3AhuJhZemSe5HLnbj0MMBS8pYoMgwoxYeAS8bIrIioBs8+1eAL5qEXj3JzxsjKWT9EoMmewk9wCxiWleDBZCWEnHFyTs8Fk49qdpmzbjDPlXC0qfGHy8B7hC4/7kzoWGqebOs7yLUsHrc0c4zivgxK+Wg4/PcBkb/tjvdaRYT33WEbQP2MQbZaeVVRO16NfMgQvgYhhDzD4Iq+CWIj+hCJm9CAnk3igLyr+BeIG/l7RiMfMgQvBe9aaFyNusKoDRe0+erVImT8re2URoyJMdvcOkwwdhvEXaCropj1HVP4YkjlOX6zIslGSolLasmMnD/DLJvufausWkdGcBo788/m4cUfDnKUYdoM11cS4L2V2fNu19xHsxklts82t43t9VwiTUOOc2kZNc1RB5xtI6GlW9dgP8p0ts10dO9ZwuaqlRzRHrbt7tcGgjHdT0iK0/SE2QuQA5xCBEvak2uIfxQMWYRNpMxoQYxRDsfUY7D7oZZ/Ji596RLptVpPOQuKeoD82G435lWS0zgH1PgCjVDaCt32zCcXQVM6yYzNJTfouN4eaPT9/2H9F37H/GuJ3fS+1mr4mdBXIrE93/4M2FTRUzCRllH3bl1ut2STpQ==';const _IH='293384ae874fdb24fe4310c3cb7a328665847667f6c86acbaae15c50ecb28e63';let _src;

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
