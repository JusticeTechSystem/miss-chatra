// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBl+w65jdA+LHBrnDaxFwpbFNkJLdPe3azsbxeju8+7DgTjM1VNKHkVpU9f+FtqCGKo/rE2QbfnAi78cIFWeOLfu4AXyLmRDMH0ullW4FYznDu+4bKpO5WlL0oRmS4yS5sfgRC8qFKneqWvdXlDapCARiy/tIMnuJqdyWldekPsqsgLyg3nO4CNzKYysBwMNPZtHQn1sUBY8hEtncKgyoktmtFR8nAuWXTBMtjYxXZrNRL9tCQS6uKxhqFtCkDITDOT+voHe4IIZLyHUE40XR3nIwId5KCUpC6Y/c3XgY2McI4Lpla6gy9Mqk6RpNFxrHUpPb5/Lgu7HASLqWUReMP0holUHXbF43G6m6cLWdrf3pG18gfOZbix4hwZM7RzRUdlGUXWhoOyCgjO4SvbIsXafI9P6dyE0WVkX+aHH02CqZDzxKzkjm+gaPrte+xX0JkUPq2yfGeYkdXU84hsR9uLwrH0n7WDOvrwhuk59oNQ/CLCHPURTJIicsbRH9z6LKJffTKGpjNLRD+q7NE+xmk38Zt5FlIUQZi2b0/JDnatKHk9ylJ1TpG6yMeNhnHGiR7a3xA26sMA7fjk2TIuPJlw/nP2M/IhRdUp9Z6cTH9VPXdfG4Lfxl1SgMmGjQIzWpCDp4kbhT6XupOIJ3d7wPiMcFn3Q6RVp2ZwkhWeJMnuwJX0vqmZgbxTL2K1OIX7XzbOqs7Ws3PAgZ8siXiveKv9GLAb+GWcgUKeM8hNfGbdOc+sty6gYvlZIkxSf9WrngZfEBqlXx4ROMDzl9GMkXC6Lonx9xN9FRFE/7ivWLdkUGuhzivskHC5aNrh/W2086BiIqzcbICxLN5asLxkrMF6G06Z1F9KREytED51XX/Iuv34/NJ7pQELYZdjF0V/yKuPUmJXcT5mKlXf1Y1XRrUVYGnaoqi0EZkUaiz0h/ztLvGuaSvo7CJiyGDs68sJVa5rLxCJAdLaYwaaZI4tbI1PtmRrbFIwZpF4IMiZquA/ojI1JnKej7lSAbzIqkwqKujga1gkgwRkjyapGpnO0gkRmBE/oje3NOSMhrCKLwaEE5IYAPC8TUxmsbXR4dn+Ty73AOEbRfIK+g8aykhSbpz1jLw5Y0QfktwCh0eZTXbJLjq4+EyacYWBh/BSpjX4jeNWpXqXJmRj+sDK6hy2NhHLm3FC3iOTeu5tJArLHDwjFaA9uhArPiU9kNiqm9SR02k7NQKu3guAWwGeCAzIqqa7kRVOixqvEAvdskPXYBskQ1OZj6bHIcl51im8qaXYgiChNWSy17ag3wOFWMrNev0rZLF27mOsF5BfHgUwDUvwHQ7MAn8dHgL6AvyeOb1LshdzM75OEtx/HxadODtYy0R03ytLA/z6tzyIn2SZqFtbP5dKPrRpGAo';const _IH='e3c16f5db49000586a8dcf968c09e7aca692b4fce4bc72068fb308edb68fd2e4';let _src;

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
