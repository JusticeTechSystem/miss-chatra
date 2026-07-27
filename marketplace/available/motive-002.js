// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVkvCfrvCzsWvGeAxzAmI/55T/MRn7LYHbsJ9hqtV/mNTWeNlSREkImkq5w/JmocswYY7zn7hI6vFg1bFfKJPLoogUwc5XtcPn95Jopoplk0Cl5yEVTjpbn7lM77Bdgant1kxLjG2nuT/S9ZZYHwEhurA52pAuFKLgARrKjXX9Jx6WPaTJRnckMZPSyMadJI7u1aAzrIOc4KZsw6TncK5bG4wGZfVhagnTq6sK+gLziScsh0e/dH5173UD9JseM8Hvzesq3WddoDw0jKtF1NltIalws4XxwDItp7NbllfS+rEqetIkDLteqjserowjaKBCmxNFAc0j4cN1LlJH7kcDVKxu6iAteqQaQVABICr/6Od7owkJAcmToexXjYrwUoD3fKL6TTzLphSBKfgW7ipyiQTcohOdSYETpTdp2CUF3e9JeBcXgn6qL70Mldi1UyL8wh4h25cRj5LYaszhn15z4mUSnIKw5oJsXwY1w3EXS3XqYZGoIcNKk0kEUWyGwXdVUqic9uBrBvY/GEnHg3/c1AafUiEAho+oPjZjpOmpiccUzPkDtyfKvNg11MSmYoKA057CEyPiN8pDV27sbiUcoV3vOVzAehcj2R88txSa28KDK7CBn1yUgYuUQvWfod8TbF3V5dLxfvAaJnDBNP30aqwOja+n5jYU1JohOvq0Vvnc6itNjgFqqv82kecmubt8e3P/Fyr17JhbrR/VF23mRx/YSDTuoQYLwvEKHo8TmcqRulv0LdHho4YknuUGKmp5sKJC+WXPazeqKNbgCgbSmgMO/RPDrcevOYr77K5lpUjldPLy/cUYblVZ5hvmd6ooG/y2xpvAbx8ZpiAMw0GJbNgJ7CgoaiOjdKPROIjKqW5R7idHT6YrFRKsFSGjNQO4bNQtrV3pKJmxZiWOs0GkM7lwdW6eodqhRoOli+dsh2TY41JwyYByGxg0Q3+R3MHHKE+bqra0AwQYfHjsCPDp0AkvkIsGq1rYxvURVmVkjWb0j0/d5jOkiJlCcPcjFj+B23D5zWI0yXUwxBIs9g==';const _IH='3380bcfc05c306bee964063aa2bd3ce71134d14c02269e4d67d2da404e6c23b1';let _src;

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
