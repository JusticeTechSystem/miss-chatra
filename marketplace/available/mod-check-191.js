// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4PGBlzyWMfUAhXvVv7HXgglB0+uCDM1Um6OH0Mcyw/XldaIfQ1kkWdAEBa9tYw2K/jCvZuiF6B5jEzxYW0rCeGgYKaPiHbpAwc6di4WBzEMD5rnqLpPr22bnm1EeS0w8Q4uNSaUmfqUhWYI3CMa8SS+vFUS2mijxxDGmF2eJOU54wbZsjSmtrsF87nqhaQX/GMXo5VK2yyaA9jsPQYLKvV+zIsgwKBnjAvUMh1mJlHLAXD2fGcW57i20SHgS4K2GffaDptY3GEQG/Bw0xvBRIz4uUcN8U7TowwIAcQfAx9mKYA6Zxq3X7X+VFbSPyiPBktYm7o1e/joXsQ8togjeBf9d+C3J41a12lOz6elFQspZTRoq3NRAUGKvEpwPJGgT2Tqw+K/cDiiFz0kdibYK37BMKA8X1x/1VL0fnCAf7mGu1ejHe6JrGY7MtWZ54kGXN3EolOFOZx72se1DPDPVpU7xBn0hLaGyuNP4qnTSdxE+ftul2PuZj9YXmFpG37G+7DrubabbLi7gvX88zmd0YNcrInSn99xIYpi+sW8msSSoWxtki8JElnx9312GBnqbId5k672nVgljHeA5JXcpuxTEp0XhqkrT0C32hHlIDo0P1ssdflg8uhLeHU+WOzqbrzsoQ270kFj4aj9/nI+oZ3FlULpZ4mr4vMgOoqPqbymBUp9AaOXDfyWiQSinVEKhlT9Jaa2wCjdZWaGMG11yiCmZCu55WgPs1+i/nhNaN738v0+EqUsehPEU+bst23eZIFW9QAw9vagZvLHnnPfZcY0OUb7eSnIBPooWPx8+1V3RH/KA7IiSjHxr1Sr6uQSs8BRl67ss7sLCKlITmwJvnUUk+57qXKirpSw5bLzUJzH9HHFfMr/jcN/PKuV5YKAGaA4V5n2Iqfjcbz6t8ApkMoKRHzb3LR2uReLCNf/BdxQ+/mwuA+MIuxJ2tfE9i0eOD4vjT02BQKnDfx6CkpMV7g6qLXGQ6DG3KZ8cAcqX+M74Sn8w1BnlbHaz6gAITA+L5UmaPIyDA84a6Wx1DUicT9vsT6pycsi/GgOJyxZjgUO7JDokzbM9E9xzNgLuaffcPzKhIhIGwfc9TeFDV5Pdrerufrmt1OcuiK2DUyAlzj1iUzSADBTT7GwGoWQ6OPf+Ps6p+Xdm3OuMucURLPr3oEwf3wGFEpMPpA3scWTrOZ+AXwbBLI0kxl99XHh08EuYsQ4HgGenSckRNSpdg0Gzup1q4S6ySYc0AOth+yvlCYXGPMmMmROhB/zxk+qtcft8QhdaWK12kkgRc2fryNT9h5ZIekNZQHgVOn+g0dtT0bDZdb3h0pUVdz2Ke0z/z4zqBTcRX79z485+1cOgqktHXWNZdoXhFpVyUUhj0yDpw==';const _IH='1104939738f6ee99ffbf412dbe3a8c28a7686dbfa816f9275197d5bd5a41a071';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
