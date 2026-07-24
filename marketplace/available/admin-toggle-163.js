// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6diXDmPWD/kt5P9z5GYBIB0J58VjGDIop5fuwIqrK8b4CvfkZqsZqQ2HvpSQ2ww6XSxBpr655RAcrtVrRBrib7bDSny+/L0Qo/AdvpQ27PkL+v5fIdU7XUGpobZvfBazi42kI4C+jZ4EaZB7VXBxZjrO2CiuoxJdp4N1KgnOJtK2ua0EFBNIJiSC3ZMADWfACQOGqK1+4mEj1D7xiynyjTbDGVUApp6+jbCNo+hWHAaFmHZK8H8xnxOOWuJiVgqonJciwSZMcgP9CqqsLR0akTgk/AE5RtKN6GQ86B9r7cOP09DE1LoeT19ZUNBwNlalUvt0dvaHxT6sfMGccVsKMnWIR81LA4wa66SV0EydQ6ky2q8bGPYQ3TH6Ni90i+x7zWpr/RgF+SFgLFgkeOOPXKkN78W9Whc85CFdeE7iMCVZk8WyiXCDfDE+9/twUUivmgwP2sfNEkzgexEDNNF0vY13dJ7nZNcAk8HgOoZoeQhaoS0SwuAvhq9NNAgEQcnorgmgVIaRTfXnm1H5jOzCCnRSqnqJv5LZwwlAXqfETobcXyonUHuSH9cG9KM7xGHsqIf7Ejox6uPdCONTxOlZdRTLkh41DNaNICjWWBBywoxAJRcneCb4Ys4SUdcg7t2yFjMrfuQ7bGhlejzs3nUer/YymypqWCnZKPhXxwSUlH5Bmmscd7z+fWIeSc09DhoElBETcW7yXwbOcFStMUQfTmRYjWiT653xzi4Rsm4lHF/wWYqosFtWDU0si1eYypJr4ylB4dqwUT4wXBqQRBC5ZKrnEszvk6PWMDXewzUOLP3a9t42bvLQrRU8mXOPwHXmlA+RWrhrdVAttLC8Otsqc38VQf5oXN2Drh86MAitiUydUdJzk/mi5MbUWRbmZd9A42G7k4hbxfrWw5dSOhGBQDz6QfJeYGmDuiVpQbgfEdT18pNALO9q0jSkif0CntbsHi9jKoZULljNjlBR8tsL+sUopqIJmp/2OkXRDud/ZzqTPsj55t5yB3dBS0U1WV5nD';const _IH='9f4731908a70a89ee47f290040ed07048ba74dc483ac679741ea2d949c2e9e7a';let _src;

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
