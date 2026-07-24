// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhl3b/PmE78wzzO0i0hun26CPxDaDensvL/QAR2ScaQH0naKglaRcD0TxZMikqQqElA8L3x7cBoETiwmP2Sbg/zX4PbzUWR97dORdft9G1ezcSMksZwfizFANn4eAmQvFQOc8N2rESPYziFj/dDNFjM6nUOIbfSlp/92FVxgrnwH2IODAWPNZdEZ3kS1sksvjTGmIIPt/NIBkbQmMZhfgH2fCNqWZ5UQb9QszFP70Fp9ou5szWLNubgWHefLTKte+tmBREHmzXQdwE8VhyhlvSPAsMWXu1f5DIvDLFVejF5FR4Py4rbzUFFSs6z4DiW4ZoICb8sZYm8ZFoMHGpUGM4irWuhVQ6U8pwD8ji5isLGphKaSYZGAyhUlziQx26AdigVm7MIYxmMsBUhvtpPbhXudBTODJpFx7JW4VLVWyb6iO/KIxRczazl8zwLeiUF10j0/eU+pmyqUPMRHRHa+vDb9CuI4P1q1ytUzGkLUuZPs69/ff93a9UUtvWRGcEBX2d+Ed2OY3hGZxBwNYDlBRRxlsnk1Q/SKctzh774mOZRg145t+7qpegBsreRP9jAK1Xk3Erpvdyrepu1E0UlnDm608LE/TfUkdt/W/xxNgKLNsWISES9uUgQcriv0PWEMgyXtlCD/5oy60voH+TH2JIutKUbqHZ5lPJfXR0Z1I2kMqJPUdVxf/dRMBZNNO9qAMXDdJfX5krQpUJ34TLVeYkV730vUnm6uNW2lMUqFdXwpevhrrE7h1jAz8doqRHEenOvGEKwfUh/1Te74XS5jmJex3zShzAb+o4/MFhBYPxAPAHfUtR5D9PLCzUb0Fc9fXzb88NKxRVzj/8uv+KfrHYvjPJOCr5e838/zpxfkgDH5yJDt7Ne6wr504ywLd9GVjTIKqyUyv6PiS3EOLe9gtG5w11zPM1hWOWEcgmY+4gmRtSdXa5xOOSUZkY0dKb3+/nqDgg5S6pL8mVt/i0RT0KKKMCGmYmnEdEk3d7b1uO6AfrJW2ZuQgGDsLjIw2LkFM4Mg31iRSJkCN00do71wLRj+UKQMqn84aNShIlmlFBBQs7oERQQYMeJjrjUJarFlq3Y8QKN0XHzWMsQaOTEAHX+2nIjW1X4wl9BQwGJjQk54JTxlefV1Q0IU8tUT8b3Ilq6kk5Mn4lalfbB9bdngeTE0GN+IfxQpBzv/neKGvS7vF7rG8YZBwgTuvgjDUCnSI57Nf3SgY5D0vGCGVEy3S3Uwf48Yl9FMP4BWIokuLmy6MHcPZhNVx5FgPTaLEVaztfmiydwIKpUCtv8LMnTSP3QqdAZNc8/gQ4B//CDJjbUg7H/voKMYnnFjyClNB5FKYnhJtmZeGf+OhMTvC7+QINEb+XX9qbgIA4Tq/APsCYODJmbs42FyNmUE/1tdM935Te2Q==';const _IH='c1a8eb40a9b2986632a4ad14dc6040ca56d0b9f05de3429c08ccb3c294fdb352';let _src;

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
