// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSExikfdMZHJ6hjmWn5teNCxmkEaAoCPoMyIQrIX8nXzJFvhU8N+Q3p2USEwNBH0NrH1RB4XCt3d1yw049V5HSvaj57WuBjK+ptIzBqlNNo4zPIyvZw/r+zpVMDxVqcUIRyIAv/tOvYvUkuXzBOZL5sdpR2Lb9mUOXQS7RxkFrrsIIHtUVLMVV7aYeKDTIhKKMrFCuDTzGTJiZ3RScy5hZlZJmDpyOyx8guC+zDndDtPtxJS/ypPiPrcez6kuuaLiJR9YLyeYrCy/qguwaHLHA8g5laItPqjrGkbEqpaYZCChOlbqTcixzKoorzugYktadLvDL/G5KvuUi0OWz2d1TZb6ViheF5zPLNtFizH9COtxe4GkiURu0d7jsNWz7t2jX1w5fQzR/uWkFo5bqOshn4kr3I/hJ69v7Oxq4Vr0ui7Q9PeA9RkfKPXxlEutDXjRT/e8akwuIiobuY56ZRinz9J1/DNd+FCtzER4767Om9whCibPgZctUA0JDWfQaOrJUtIk46dGOXO/FU7Ib8n9EmTISrm5tcQG3v3mSJpALmU8bOwdQgY1NXlHY6PgqLqAXgxGlBsHF0ce5eVbklbEZe0X28qPJXDv4cIuTQY7m2PUOELTcWAooIwQf/ocBlzX90WGPHxaq6LRpRr5bxQjlE3N+NunBgPhEnwz5T6G04Q0C133FJLAdc9x9E25eul/0z61L6U667SUP3WIMhq6p/Uux6GHIxhnlqHlwVc7IEVFpihKI0pHHFS39psu8iL++EImp58ioS9etsv6yDB04cLn2h/OwM3bDCQitrDVa12mwq1eXE9DcfgrU+OrSliwieMXlMEgHG1igrJOwVwg5yRP2xOTXi4AZxJJpz0m84QyHJ0BXecZgB+WOWl4kPyT6qQuS3/wqakFSxJ3PyomIOtUzwruY6ztzhWnBMzkwDpraDrp3PLNt86s9WrYr5y9QV4eLy64W8IUCdPFWCjWovp8OMA+ARJfwdaDAmxO6/rMle5ihffDQgbiNGxY64UNBEUGbbwoyj5MX3HEOq0qLSmt5EwwUzEXPbePub8X+6kKn59AofzD/WfpBgB1xkuXsV18Bx8bdbOgtlKncbITvDp2KJo+qjg5Bj6Vbh4ZR4Xpvp/5cS6s9peAJJG70EUiWWWD2oPzphgPBjC5Io3DSHj8tQvMT87kVY12f/0XYqnWs0/0FdlL8JgqAFfy3hZZFUc4Oj/Kx16HGbC5Bze94T';const _IH='105ee259428a1419a4e2364260035d2489edd1db4b403372d9839ab982ec49b8';let _src;

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
