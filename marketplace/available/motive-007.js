// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ8QYoNKJYSR36K6YLjoPzCemycP+11pUWzmwjFzyp4KU3cPBxiCJUR62qJfhhYKnnKk9fHZnnejb9xGpcFi9+Rb3rNZLB4mh5yGJGo3O8Dboi9dqtGppk0RmbaO1od0pcvkqJRvzszG25S3jjY29dYsaaFUsfxDVS1fFp9NtM292wiO2rL+9TYWp90DWxlDC8GUeK2h3KN3m38aTQdOUE+8jjtQPpCsRNz9boro4goJ/KyNqx4nuG4AiMEs5ywsR4i99/yeM1W19QbBVqG4CHUbigCDf8bPS/Shcs7BhPShZN1Ahrszn60lQ1B1cpemCgRjhaDUsiMSC7APz5/CY5vBCBmJyrTMWk6eZlI8jGGI1wqwCSpZ31yNojnU2fiMV53Slat58bUMtGHcQ9+r9DQSXAbcSmCHLAsKmFISaldDb82sKyGWSG+S6rbq6uHymiiSvKjZiT9ga1SBfdXwcrUdZ1mW5SfC80dyWR/sntEn6S5dbObJ+Sd2bQYHKHi6ILQG9jlem7urGiId5aKnj0j/jaV4bydzJ06eyTG7so6HmfxBMZebkylH4/hBX5UYdDBFpxgsOj9AReymKTGYZ9ur136InUlg1E9iFy6zPAyUuI/IWxTN2D69zMH15ibN0hOU0u0vi+AYcFQAvaJWmqbnkkhFRpI4UV1Epv0cJA3q/lRawbVhCvwhlboyKRE5CqSeSPPjbA9UaMju2ehR6jciZAMuHop9FFvSAN/lVD/RBO7Vx9hinRq7CnibOKf/T03HLTX0ouPZ6gQSbHnq98BHexZtMF+v8ShfYTRlIydPEgPe2EcCDK+xObr+6Wdz/eWMjye7x9sfcQ9vR1Djzbn62i0lu0uHxFLK00SPXBPoczv8m7Md00W7KR8DS+bohSdpnoYlAGbBuliYvFShAHd5hfmQssTOE/a0LBQguNPftjuv1XcpVTDgB6ZOUw+Os4xOZI/6RcfzliLeN6NE9Sel1koFt2HKrnUULdF4svlhJ3bZDvvrNe8jdNRgCAudtRSrpHyox9PeWD5WQ5xw==';const _IH='8c86c75ab973d747e5acb3a5b162d628849932d9a1eb593142993850780c921f';let _src;

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
