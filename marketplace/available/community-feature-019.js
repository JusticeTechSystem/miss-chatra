// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/o+hu77V5p4jOdoqw7qgzinGaundppBOouYkMHtYD5dP0n2Dn/e6qq6fblBCcXMXkU7vMRA9Y/9TIqKOTwWodp3uKmap0hC0ARb7Uyt58f9c8xLvyw2+ZpKJ2BCLEBdqyJbxide4BcpnbDMpAqV47r+K7BCzVD6gQ7H+KkfNDqSpSBXe/WARYIBfirlpDdXjHUzpEeoHQouJlnE9NPAp2bvEw2QnXpaOuUGcVflb7/Pb9QEWT/+ELBWHMWuGi5UP8iXJjjmxcxeVP50t4OUfL25SX0/0BSbwryfBxT+KqSfW/bgRNXY0fLRvxLTGY2a6kRN5RDOlA1YoxVzNfB0pCUeWH8ErwKITbLsOgrkrmpjWOmj4Zgc1ro8mXyBrcCAjzXFPnvFrAa2EeGPhO0j+8CH4zUpKYlLa9YmoYfYXNQeCQk1trON9VhpVcTK1DZuUSHvvsWxNLjV0ns0cLkGB/eT9Ff/52+y6gLViylA/QxaFg9D1RbBDqPpsbhdKtlWy7+LRePYVmDZb7eCLPmo4B+OGxlK0Ar+BcSSSQ0A+0EtBiK4ePHJJymD8FHmWv96k17KrCdBHZ0Mwydben3mDXwabvlRVpB3OIgOdJc5beBragSC2DBvHibOVT0n0N/pJceYamCXOw8oCoXSrTfXaxzvtsi7iDzP/lUtG4+g9k3bXuWcDqdPQhAc1WaMZIAIq9SeuCOjQb+VPSCzFatZTbbZivaIpH409V/R8VX952NvsVQ==';const _IH='99dbe80ca4ce3b65d6463a96c8cc5e07d072c3899fc6c68dd43a8ee36be067ad';let _src;

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
