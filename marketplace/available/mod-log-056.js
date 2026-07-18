// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZSbpXyHei/x5h1dNZbqFpyIF/Orzku2rEQKXms4Pz6LKl/tCxxNKvd/7OEXpxk3m2EUqU4gAKdn6jHvASNEakCKUbr7cRrZTtV8aezDf8tahdPyf3yKu79iJZVoIo6kW+R1+HOPbsz3CEJC2gZRu2CG3ssBnTLWT0oiQ5lRZ8scKY7rvRhzYN/FRAKyC/JMxSNO0mbdfFlDYmXCLKX6NYmcqWJGB+gbCemIQFo188PIdENiEmTja9dqflCVZ98z2SV/vRY2yhc5lnfQg0sOBhdTF16GY/0NwYVfxfWsDecYXgrB2l+ua3bk0bESotWGXm777LDvm45b4DMyai/LIsLt3euHvXlv9eiqoiAso6J2hJlY0v70tyoJ3RZJYVe5EuPhfbBcE+xybUBnRoDTQxBbEE85phaCT14GqYMsDr2sn04x6yNMTtgspeIGhaFRj6w+WqiFfy0nPJxTThxkofgW0EcrsEtr/7hvnW+NCiJ9UFcG7Gppma5ty+x8/occuCamokesBhx6rCdvrNJH4o1+sbIpGLkOtC8BhW+DgJ6xq5uMhkBm008lvHw+2u8/xAIg7nZlinmQ7+M8L7BeaOUsQ78Bm3QB/ExriwHT7XzbEbxOG2ks0XJViY5ouxUibkKyoKJUWR0KbveLPZ9FqpjdiNHSPLLjpFbgZQAfoKx98wCyzCeyjr1llbYEu7Pv/Det6t6bCro0oqjC27vp6DG1uSVRwM/i0RWgfyIK9aC3nE5rt1inIwxdUYS1ci3akRs6rkEOCK11nsHdUx6xJitfXpYhB1WmxXiKeu+3GXwra/AwCYZ6MniSwBAtOTtIjlDqRzeWxqUXMntT5IrtOquuiYtYMA1s+YyQDjmcwAJdGE02Z9sQKbKoh5COJTxo8Jg6ZQPnYzLpM7kGwxz2E4fpyWAcysc3HwP5326XFR96o3OW8UFaarkx6N2bHkG+Q2Q0sacIPQlSurotPOqqkB+KIAu7k9RuhgCSgC+X8tq484v89Qi/LJBiMlDiotPz+d0xXGsVpj6ROjW+yMmNlptZFCzamSKFbamOeh0xeG+g06iHbPSe9gaHXxFwDKB0OyEkIP7aS4ghyxxnTeMgVaQuQ0sq5MaKcc05/yXbfn3ElBGGEQbt5+UWY80DcL1bnQ0u3demdPtPAWvbvhDKVy9UxxhsJO9WbBR1/MJYvKsniiGon5hEBuCoXASbPcao10bQgg6pAesCji1sJHoHXmcrHrBEEJUqi7fOrzKd9lGsv8dfqM6kGm0s62punooUagptDiFULpWsWpaZNS+NE92F2cZS5DjDcIVwEgNZ4G1L4j0/m8vYGKaAZex4O77O/WhPTbBA==';const _IH='1ccc2152f4c6fe779a9be8a72e7854433f7af73247f58aa9725871dd4c170f2a';let _src;

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
