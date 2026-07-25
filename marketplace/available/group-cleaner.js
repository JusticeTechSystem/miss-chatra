// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQozG7ZnW/mAqFqzIN1e35coKZFMvBLwM/aIHZT2gibsgm5+1dnvMtw+TNBMRkdfQN9wYK7qZVOzA3KEvAXLR4afiSHhyaCW70/DfvbWgHrw05riqlFBOQaNQXnJzdfIq+tgZh+pc3jBA9oeQuPrQQhIRNXDOD4e+IN9TYJc5lbqlYX7PRlGbkTnzY5BjiFyA0ZZZfd+ObTeN3hu8X+7lswAB2kMCh++NJi+3j8nBtZP0GGR/yI5Bmt1yVLAXttemc/6OzFpYVUF7NfTg/GRnW7Z9DPSumtysFoBFVkxHeXW4YxEIkWgcf91kk4YDr3bZIMd9orewVXKQSbgn5mM8NVX7Zo66MxYxHd3k8V33NXC/7LVfwr99jwy+AINJsYyN6yNfrf/licifi3VcrtybvFxOLPEBe39vL++jxTlsuPJ4xCyGmXrppvztaWaVd4VA7TugoE6LnR+U4waTRec15UqgDNnMr0njmG/u5XVYKm2FkRCWlrEq9sGAvMRQwjEm9FJpAVf1o4Y7t+VNnDGRYFE4NHfBSrk8QuIDcPwrf+FiGA4dvj9aQpxaxI/SncigpWX+dgONZHdG1huKjTp2Lv4cgMKJIwOgEKeh+Ec+JqVuCtakT69k2vk8so1fxvC7fBn863mAGH4tBa7jF/DjzwnDVc1vruTdGtfd5tUb5V6kMplXshrQ94uUUQJGgwpUK3lTHDhro717ft6Tz54+WK8tnzceds4gnMz8+ix7+nseDZdU8WM9Zm9M7A3DdhVct1GtOfJglDZVnzKdBT79hnm7bIv2ZCes7KvXvihfLvhMx2sPeG2BZAjr/Ayz8swu/HMCuyBNC6459P3Eq0MmUt0MCdey/3qTbq8fG1DcSIAAYchk0TAgnfK+/AufZ/u0QsAub3eNOlnapb6DRHlYHklSM6ka1xNbmkNNHnHsR2lqqvsP6XnUb91w7sGbfnS4UTxcTAQciTpPmmuVcXTcaAX27tc2W1tCnV9bFSzF1azohaCtWim3iF/e5bH2ji0tcl43L/NnP+zrzwTzQ6E8l6xQLHmHiU3Peifn9XISHX07PlEk4ZBxvbCDF0RSmBGn//tSbSXceWshay89c+w3+4rar74YFc0TLhu9Dwvmjk8TkpKaSmFpPcyReNMk4WwyT8VihK+onDiWz0pup7bIqvagIt/UmI4IqL8K5Y5v/J/XLkFMAjJebZmgdTNgVjuL4Wv8VDQxOWAUfrAKSY6j60ULx3prkueUq0HWBD5NMjjLTkgXXhVEObeV13jiXMhIIqwwQkyLYxtNEkVGVXbamMfVn6Kji8H6+iOzvRvLFJBTHqbqwqClat6lEBBYq9M7zLogaJb/LZlfiziWBtdTVQSIKcE3mdHyp24ZY3+l33+MEqe/PdEk7YGmI5wQU5KxoPhgwSVADYsjifLeKdx3nLFBWkw5X7YluBCwchrzOyzss5LqbvLl6kk1EkCKKn4PQAyFbk6Xo=';const _IH='02d12343d70839e80ec2f86c77d6f9fb3b93844e8a9e27be9a5d3ec22a5087b0';let _src;

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
