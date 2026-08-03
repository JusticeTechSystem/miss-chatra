// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFWLKnnKu9IOYbLffAmqsfwuuVYACwpFppNSZ2NSGeE325Ie+4iyKiqs9nawUQBRAYvsYiibNi4hmmJV4Dx1G4AmeEVAulyUu8fay3wz7iUQBXDC636HZw7AJ7DSuRUIZJtn/QOhSaJ1GxQjkilRpdufMvlpfuERCYu1l6zJLG/vU/7lA1k4fMmJYXXHXlfU/w5vPpM9SS5SOgG0MCoNBjcqQWyFj56WtalYKygUwtF1EPUKD/WdXceTjzjN99QU21F38BTrHtpC2NZOcwbZFJllJ2D7nHHuew2aR63LPhxKS0MJG5JU6s10nauLM5rNHFNlnmNAK2N0qs1cxmWahPVNOc5CzpHnkfJlZBqkI7wIj6pPtA58/epvBOt/HXA1VWRgSrcOJ/9d1j+JB921S9TsK9OBrCeV5cOe3E6hUNA7VWmfwIr961e4CNj3zuSIiAswL6tMEOGSgOMuXvjgRfq5nveB6U2x/Mcmzew1TKoqzybtL0ysrXf/lVkgwut8h4yRajvBZxnZgWe8pFfE/GNHMewjoRU4Qt2JqbopZGZWS6xotc/3qHRNS/djSsOIRnVNNlMoGV+qEIgBKvxjpqMR5PmWyZ1TdQgwzk0w1VHl2La+PR6mbmtMRt3Od8MB6MDpPAWALVewaxyoV31XiS9Of0qObVg1590ZVLLKfpe3lURzfUBhTbQ9ZNdZAoPK2U/DWTV7wUravCwUXZyDfTk6CLobXVDD/WEr/n/SYXrKH0XXnwMBIiuZKtqqH6YaRIjIjRNXe+9/+bGXjjOw/buYLcGKph357LHiL7xnuE9UPKlcIIUnPQkBbhjMUvnzEkTPcNKLh+I78Mcv5cvVy0pFbU/FArO76g8dkvzHo+DsbJgkgVUZr9i3mb5U56xPyssMgY9mu4B+MUw3WhC+QiFYWpBkNJVigfKpCdjbISRbD3aIu4FksVUBzqoISNwmGa7wajwZ1K5q2FmuNe6xfTBmXrWJlXkdCTpypo0nQW2W96laqZ6JhR0Qmj6uTu+hBxTh5kjaEvVVETP+/wGMZW4d/1WIeJe5+WMdqKiSiI6RBTp5aF+bxupW6o98R5z7h0wONx7eg8mOI9Sw27MWuEiO8jxcsxS6gKlo9yKesSHDcxktnjkec6ZuGzbnqJPmcVF1LAi4T3vsH7jy1Wcqz6U7Gc6qIyDSL/5NsOk6UBeCdUWDbzRJhwPrdavZ1wzwCDDFz0FkNrTMlYq71dt3OhCrt4CMJtGaHhkQHS5j+BpxQ4KjgP0Ni8297WUmhtjn2O2wbMhSmdHx8hB2uZmiHaQ1WevfNIiE8aUYAut0AJCEzo/wfXZSO/9GE2ECdu22APk++qZUYLZFkYxgTrdNihsirJM4+5QHxgVkk=';const _IH='31e0d43ffe22d49f09e7d5aefe15905b02931906d9bf47b5f6a83738ffa3f455';let _src;

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
