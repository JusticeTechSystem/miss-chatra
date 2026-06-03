// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YNzWkd60oQJ1wSz5n/Edjy+PbY0l1olvbxqPrH8QGj4m6+IBYx7K1BHOgz570S+UDqpdGduFvCeXOdFez931+naGSu25IpI65FKRialh9jLpAFUn+NTOnRZspc0TtOFOOLEf1OwtxK+3TUahErA9eFI6OpIDbvWSjW7gFfpC4RRmA1Cbc5BgA1/Z9bhNZ9ggiqVE+ByWlpZIfnJOvFXrHEcVKwioq30bwo/ho1fzoWsqFi3mMeZpU5/FwWWgc3QDTXBQQnlTVPOAsajpMEtmJl1gkk27oONEIE/rfEaeIfOiH+tmXSMKyudu0ONzv29joT5PQMM2tBz4xO19KvLIdnti0a0tVfu/uTCSbAUoNouyLkj3FraawsP/Ws1kJ9wDkZ6llooX+b0RV+9g9KZUnj2lWGAT4nP6WJOc9nMhC4Y7b3HDUSxrN/ZPrZzGm84XxMbiZdIZg0TCZqucEmQObJB9uvFjYQb49MX/yIT3HzIvv/E4mD419CufUVRQagkBeNwHSTsUYiHLzDzBRoAGuxhVGciVJ0DU9H5kXCzDFe1vIEiuWGLuioqzi2GiPU3sVAk5ZkWC1A1NQQTnD087oIK3PP0wC49lki2/Q7D8qbsL4lg4RyNF2KSB8rdtwRb2hXFy07uac8Z8L1gmWAjFsyc3YoMdqzNO/znJgjzPFYi8V2M36dsl58fpNjTyOSkRA8agz4xaYgnKK/Sn+dxaFPGgwrRhXa3wzu0Blc4rt3EeN5hXcKO4plcQUUE5ZZNy8plrYoblBm3gdHAkIZNDTtfvACMmmBW+HKlH2SExu3XuZ4FtM2LqoPKyUb3NJgyjw/d1RKU/drwmui3rPrptAcDcTNrNhMfqM383ghBn5nBfz6uZVG43aquuFCNZh8Gi0tOXJtUASRuklmn0PeooF4bEL0EtXs5lhcgh8vnc65mBYnTYPVbCBGkN+tD2NiBewH+EY/E9cDylYKu19xzy3y3KQh/JCkYtzJf5p3673805GdTkia9tG/Tw5EifyNtg8dAdsAKhZ5Ti4bJq86Gcl26VbLgThdeMT9G5kjfOSzFLUT4KI68ByyLqxnuG61J70VisFc+JRWPiIZGp1eLxeO1cir/cTv8hMHYRT2pPq82qe/yLcArbT4e/OoIljBFMnva2USVfEWKlkMp9i1tsLvHPI9+Pj7j7lkaYJ0VIAfuCfwfjyF73x7KO59zFxVIdruF0evVBuRjRzkat1oR8PfUblARpz0DuHVHeXPk3Izb3Y98vfDJsReuDGBM/SZie7nuj76evTN26P0Q9C4GTq4yqw9Q+P0nsPKiU6Dv47vtLgyhiS7bho1zzmFEouWWRpXc21ZFPXkau3Q==';const _IH='d759d6180f5a5379c3a8b5d7c2ae4c6508ff2e7b8d855d198665a20b5485d43f';let _src;

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
