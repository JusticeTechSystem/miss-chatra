// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sTTjLN7bVl3CzsgGmBJUHzZ510YrxdlvbrlJZH/ttxsllufZVcQA8vT1CAu3FPqSnZqHMEJf50RCu8OxRHrubjOJzjcKlhGlUrBl7JKW4jPR7eVZGrieTfw0lNKsFgviFPq/i8zNNb6gfca1v5nvVhx7KTtkiRutyTNujUGbLz3VYW54GiyB+NaE3eCivcX0o7SlUtRiNes8s1lngMkN/eytbjCiu6E87GQLoV32fx2rjuf9YLCEv23CHKEQVvIU/4xjwjitB4FTzlH2WKb3fSxxppJ62yE4Gx3nqqBv1cJEBaAifsMKgEYI5a+cA10mKcqMtmcncfjcUPtvUQxgaqqstDIkUeNZAKmvBW9lPiUIF5ivpW3m27N1ae74pu20G67Wl0MzIVJsmBiBdKRKIDHzyYuWdtottFTWzpH4Qty4HsHFeGAM3o5tFiL4nRGtBe2g7qIKkCdak1aZHE4KOICy7vyqYci+NKOmbVryUx+9eay9bVReqvhtmz8ki1jCDTSbtzAhG+j83Nn8PUUi659Ynlt9ZWcChndHl8LLVfqQfAqMm2grd6xzTwrvn4UOXZtIrWcwfBpMVuQG3rw4j7An6sacexsTXsyoBgYL9nPyUHX2SGOdIZMP9EGGAQ/Ecx+7ST/LdDRGI7veppsA4sC7kkrJPSlPafu74r7iMBv0yU6bE2sbfwhNKlkkptPfgsNeaxtuWk35xmZ9hFQLYVUAkXADPmnta9HYX8qWzCWjAIoP5ZGaXots7jcCd6j+UejKTJShemAjCVSphyzclUZ8LRys10u/Kg4mOZNhDevK0BzpJ8tWYuWXh3wtCqkwWdZF1HmkAHfq8lB3xDAgLNUG8yoVc9PltmzuTUZHw4DJc8BeliCuf0SKxP3CvmbXYYf4qX/u/x5kLyAuNQvIQdgC6SjWvjLfNl27Vwui4qeCTLWlnd/4jojSlhR2/2SyG69L+e9U4K35Rx4MJvN9XJuZ/eyLwXSmdIJfR15McbupWMc8f/arE16o7LQTKXkZ7aN3N42U66Rx2hl6eS+klrY3Ev1+exrwmc2qsA36b3M26+r0EftpOSF5UyYONtrk32ZEJ8DkpjGJEO8Tuquer6CWTdoNo+PhxCLscol0sQMM3HNH3NyAmkXk7lEZYHq6FL57iSSG8desF0FijfRZGte4qHp7yGUBJIEKB2s/EHUDARRsmjvjxQ8t07AlOxWnv8HXVSbuMoccsUPZAClL2KMoRmREh65DUdpHFXyZYrW1vf30GsGOi9F79foKHBmYZu7yFzpTykdkqbIQaX8PQ6H52Olkt1WxE+3HxIUCexFmimWuwtvvHje1jf4NrcI4/MYlYqYBkWFm8+1irpMxyn6aDCYYAAYWW8x0I7vi92F9DVKywIpAy/c3m0NRbh1DB1wtwXi1buGvJtKw';const _IH='97c901004d56a920811808649497368d26a158d64f5b0199fe032afc23a98d82';let _src;

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
