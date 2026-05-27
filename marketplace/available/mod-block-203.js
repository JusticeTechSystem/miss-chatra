// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ksQhEc8egy4S9a1I8mGgc8oS/zMg5nhyhwynXQhKKCOkyfBqiOB4n0TFI1EDZJ8VyUlejWRg6nOltJC4zjrMsQ5NflhB5ciO2BYtliVbfxzakzqSqliLGKZrwyPGyAOcpokFUkwyOeoDpY10kpNKESXbracsOfWrVeSlNq+sg3zBagLjkRmiGBf0cnrwFWNXuyn6AhxOZoUMb7VD8OH2ZQe4GL8rRcuhxu/Jbl6Rp9HTPOsw5I8b6YLi6fcSVhcUw0qSWBfFZEBr8wNYKsl7McVcmJf88ORMj75rvdn6dGizs24+k7WeX4c2IDVRKU6LCtA9zodDHZztVOBVw9m7St/LvGF77CkM7+tGusaDUHCiT6iOZeYmkq7Ey/hNzQ0X8h8v2AKuSfjK3hpISsVj0j/Yr4nJRF/zL8KBPQF+P7COelBZ9jounjANbLviJ3lqsI1UeyCBbwuoJAWJa5nAYOtlGo1kG/CtE9FjZXHm5SHmub4nk2NEDgiaT+oJaH96DCP/J6RYRyDuvo8RldiF3ddIvpIPh0xztgB2tkH23hdqfc58TzGspzHVssG2cayG3lylU813RLDdna1FN6L4IRiMDFXuJkENKfxkCoIux4IaBRHvxtC4m8YpZSIogLnNtJT/4TS1UuXTmTpjsb3AfL+h5HwSHqhtvmcV/6YWAyJ2+mQWD1dFOfT2pxnp3jO1VA6p9rhKksBwTp/qCdmEkJ8KwiBekMl3kHV1/nCTwGUVebI+THAquoCcC0MULLcL+vzSuLC5djHG6ism/HPASy38S2QSh/fBV3faZ0WVh7gKy+tsZiDqUDy/l9QNosmn98vLKiXbtEwPE5LrQ6eZAI0GSpPdNH3HwlZ8+fpbLAzSn5iNuWAnMjAifQGOCZfhSrK7DBYQVuCOyneWUnqYYeitvAzIntFEA2U9thAHzYfU1gjUI3lEAlm5oztxQg79jf8eaZSlfScBelnXhsRk1PtD19Ojbev+w0kwqL9Ic71Cp7NPRmeGg6rH7MB/klPDZyn5h+BmhupGAPe3RGPLUxa5g1lrSgOjb3d7D7usgeGlWYzdAvidvNRdlnawGMKMI0J4IXYg/9jx3UIBEkiAk4J7SmlofMKMHc9hatYp0QhuRZpg03PfQDB4xRnXrpIPK4tPbDSgNER2y1nbg2HxTHVEyDTXW4PM5WTLwSQKs9iv8MXo1aU8kIoH2aygGdDRLZ6PTS5WyB0veD2agzpsr3TjeLD/L/QbCoIWRbvMfyzwuue89la61xdtGzwwRR4ObCLlwqKeTKfB8OB6LQI+IBCghkURrkFo4FkIrD3PsuiPidiP+erPF5SEPKEgwe++J1b4zA4pGHol4G3fA/tLqK5a950dNP5E0/FXP3DK';const _IH='c0fdbfcfceab8740c43cc1b1270e5321f671eb531e4229706c3fbc33b2eb7c47';let _src;

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
