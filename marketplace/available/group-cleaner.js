// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3NPgZlGj0wpedZRyFWR44r5KguIDdNTKgW1gr1QOxFRgI1jgQO02CIoVo6ir6oz7fKDFy+pFOd/xUilTTj7KjeWNRWlE8qJvUEra5DweKiQVWmMdbRCgOZpS8lHtJS2VeK8JoM4qyjSKao/EcGBfz/BEwAhzZs+l8AonVdxDh1FpRt4MwBkhgEaXiNsIg2ICh+ReNMJmlqt1A8y6gL0KqAT8udmZPMKepIYcETqAK4ls3Bu2bb9nldCRudMtizqGJFV47499ql7HIp+xBkMOWx80c7PwW4hZHIrV9vG0bNfiyIVtIXeSvsJIKU5q9JyWVK13uwM68WkC9K49/8I8R8dTr5s7sMLCqch1cp/sqXfMgH6i+5sQjayLXntMtYncUyL9t4jLelAXhynYFeaAHOf5U5w6g+rBTJWFoqQMVbz7Znt0tokyl6kPhowEowVKVZCHr2GnUPEWo8eM9uMP+31UOcuNAJpdycwt05OZ+FTXJMN66RHFhW0C2RoIQXo8LEUffz5nKHyV6cQytcxS2PK0FBpOOTXKls57+sWvY4ZyCx5tnMErFhpAj7KwOiHA4tP3XQ49OuPBnBLYllOpeaxASDRJ27gCPIPGe9+rvoo4YDw+lwbGUwe5T6B8K4OkSjUXyxtn21FcRvBYAKetkkE9PSsPVNQJ1/Ilk/YF4Q5RCNEw0dsitVOQ0mwZvNbS1qfyb3K0+6u7cKlJoBssguxijZzshqiMN3mNKLUlKad+t6gVwRv+si6PZqmRw2nFWe8Bdr3KpjAGXGClSjxUyt8phsfHcdQStn2xDlszKX2itOa02v80uS90fp3lNFNz8KVIFFeVGRLu635Y78ckOBAoPMU/6XBLUBjAZMfXq+TwNluU43qL6fOoZnjaZbZs2Zpzp3x6CkuNmF3kk+AreMr4nGOR5Y/ZjcdSooxV+fjzZq1cSIfLq8kFwmpneotv/0G9GGnUTG8PxoLVGnLFkWpNjyWsEcoJCjPfCqMxsoffO4vGxAn2xgUUA3c/zqy35xDvfgUGULp1XB8EgbOnwoB1pYt4mS2Ynm5a6susRRWrJGA8HM37Ik00CXuv8R7s4cts4m6nMLarxwOQz422wwDff4J9RWSxueIGt3Ws2ItH8trO3rbujVAbJ2WiyCWg26kBHa8gxPgR0GslQVCZ6gpb8aMQQcU8wyLSYFOsZJgdPbsVTigftVgbJC0A9RsMka5e2oBCvfaQYZhq5CwN02mWTlNC4W9TrQG1zzHqREZg37W3qBP2uFcRp+Hrlv1D2jCa6x99Qk2HMHsp385N2e4w3oUx/mHWhyjkHrjdsOkPiK7GlMEKd0Rfg2olEbEzH36/cAxFfHBTbSU1tATtgX3UO2+q5J4jfSwt849iFqBKY/28e26lsS5KxnpWvrixdytUOOGTnNnbjJZALvKHvbb6m8jvHXe7+/zPq999F9WrwOgiPP35p2ngyJP74G6wmac8UVk+';const _IH='6e81d56e4683d0c8c4128ee49de3a550df769cbf6d0a81e08b34bc3e1930e936';let _src;

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
