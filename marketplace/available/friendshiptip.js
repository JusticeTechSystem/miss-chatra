// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XXzVrxq6T3kyY6NVmtC8Om0/MwASS5nlvZTSTIniJYtlpiQCRNMZS/opFhxqbzTQV4iGFKDDkh9PH6Wh9JU78UBEhkSWlyB2XwrYj6AQ8r6FBFKVSuxNMD4UWeOeWEGelO8OYiBnJnpuvXUZjqSJYfPYNqt6hcunOlnm0ymVvuwvei9OwtbdQ1+sm6A7SYDiWWp+RufV6GWpvWtl7N7tsJcs5hX26fsvejUsyz1Ck1XcGlGbVJsNRHa79xxjM8AqmUAa0QmBDqwU5oA5wRI8AzWnyfRyri0oiX0odj3eYRHaUpImKraiDSQMc1Mqb4dSzaGPQYyg78B1RhU+PaM6jiBM2qvkSBrdCtEqUNc6DndHj8UfSexCXF8UD24l5MPGAu868luIBjCNilCa/UM9S7Hg52G76unQp3LIJNwuUqP/VgGylxlmFijooJGPTjlyzmmZzYZO/iDZgEIDPj7bP6PW85ZxvhXSWkUT4f8BqzDlOJhRUUSwAkys75I4AU7PN1oKPCtTEKQfknj7QsNPUDYgaaUpA3+zzavzp5Tb50XRSQxOqM69vRaRIgTfSUUS/Jtf4bXfZz4RqerGQNjPBJKzENg4yDBQt2NijFy78pYjzp6rHjvVUEA7c4n1NngET1qUeqvlnQMJHXfA730uOhIrvgYwp2UZppytCb4B3DN2SHKnaKpoXRDDym7hWcqe9zQEM4OK5FX2wV8I/t2WCw2YdakgRVVgw9SgK5YFfjbCaYhGzeK/CWgF3/Q5tBtMF2rYLyqABhP23rG+/tpEOjN2nigHE8TphZKzgpB5HCFZV+n7OkX4dXlIEGGbFdn7rg3RgF6GntIAxWzjain/33i1IKUWC2sQwy1Bb2Wgv9T4euRsQTn/NHeCWNuIo8H56DQTG7Uwt/4acHpKTHh5mUXNprrM9fYFJm+ZK7foyFdGCYyQZJ+UmsejOBc4VmuGziA+HD2th8eus5ldhzkdZ8GmCltzj/TjNf9wCSdZpNJB3sDdhLH4u1mjwEBgmCYvvCNlGgeHpeXAcop9lwY+w4PRiJI7c2Gd1Xi4zooJ99l91OCRGf9GRGIiD3GnIhcIARxD5LMIgceyBn5euzWUgL3fHRvDSS5q7slJq7mfUDHKA0npBRPBYbXuMQiaIo+VtVoikimcg6RVrPPnEr89JeGEkNmmYJ61RtE7dsPQMVdCY+63XRRzxsmIuWkK56yRewUFYFLPTHNFVBPy3Gya0XU9enI=';const _IH='8212e7f09ea7b7b3fd32815cae2b519b9d432f1a26424ec9dc3a53b58b4e14d2';let _src;

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
