// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ugAueA0GPbMdgBtW52t6wtPsQhKcnXcddzP+A6uJ3th4IF4Ka61pzbHh7rrjyI2gAemBfTxgYtU3LPYtOVyriX0Nw8rMoMa/a1yBOIvZwAwil/txtK4Od1c8q91UrYLM/LoFbjFdWx347SxQXBgaxKclZrxVCX2lkddl5lS8OqsAJc7hmuFqq75K7yxacCnTkpUzk1Sr/5/uga4tsgaFTrXWv+PW+O8jgTn1nVhZzhFMA/iaos4wP4bK9EIuhQiRwdpml69UT7ZOOG5KkwzqVq/kjQ/EX6bsYiqguLWZsweVz8PvGAFijfxa2oGI1rFDLT46K51R4HY4NCXCw4vwtb4gGrKX9JFoQ9epj+cPPMcaxdc6wlrLEa/5r5kWXId4t8B+n3UrOcn5C+OLUjB5OnBRFvuGXLBGpy7TDpuIHvO7oMb0Pjal1r/lDf5euXgLmjXEGS86CZeOU6Ove9lTv0X7BfoCh2dzDbSuzOUqc6efkwr41NOWNhgGPeQqSlE1j3B1eED5r4MCad/A+C1IUcC1k88bMbtPDlFI28mvmR5HXpatOv767ISGq9tE5wC8uQNvDwDHVgtnJOX9aZDmHoVEkkIAymbwrJKamjZQIdh6HZ+DxxbJjacdohjf5tfPSj/l3KUaShm0gXFlZZiPvMjNY+3gnVW7YtsFu72D3cr7KSpB87SLC0K3raPkfflYvHwxe0BMaf3rEoNonRPUocOHPLwqe0DhDT51L009ZqkPAiu671uDNdSoTHww0/2VEOsizNzCPj9YBw9hAnDgRov6xMYArkcZPPrOwp0G+AHGxgG5GtYLHp1fWJ9iapRhGu1e2XZvxVJf62i5X4Kj6zl2jHdqWIO7J74S46217H9qgnbYbSCfrxlkFOlpQ2fLeWCR0I/0OA6WS1eBKI2XMlPHZUk8ZD1feZns637G6RHRpepSMXXpbG6t5Bsb23jto1ddKE2C8TDAk7vEXl+P9gg9ir6IzUA7uhnDFgiuervJTiTV5HQyfyqrjO5u+mAvvO1C8NvB1U7zt1oyaNdXvtilogNVrJjZDSHKkF+pzCL0cGrUT9Ne2gxgSfmdIVhMjPQ7+wMgeDC20sJ6oCw+rfsM8hKkuyD8A0RC0lArRnI/Vs7Cd2ANaaMpyZB7yWhlonk8WBhdC5qDZGOXCluKWqnbgAeLpI5bN36Eqifgt8e8ezaMcF55KsMPEfHAiV2kS0kdZkiAxw8V05llDabj41Vb+d5dR0ZS9gRljVxvKZ6hjdeHuH7wtZ88P12zTRN93qBAQ4J1yKVCh4L7iOlJRruV5GMUi0JYtssK4gu0JIRQ7YNYGaYei8JK+Mo+lQTdmT16h4WdrkvHZN7DVbiEoLr/pmb/bfbW1Aoj3+FVXmE4rh21L6fnxv1ZxQ7IhRtDm5hDP/y34+3GnphaQDW0LzgpTAqmCKelEBfv6wtkFaYruEO1KLedsgFM5+ea5lNZaW7J0X/vklof2CfFmPcbj2dZ5zEFobWOktG33WlhKcj0oqQe7iWXuByQgrxdFoagpousNN/Quoi8xI1Gz67RFpckvH2vtbLkdjkl1GaDUOE+c7SWCM0HNNmOXho7CsEbW8HaG1RDqrt/X/yta9KlTkXecK6xnxGRu66p0OxVNQp2niQrSFNP6gORg/po5cxNNS5Ljh7QJ/CLLUoTcPd5FnKfOpT65oKdpDv0oiShWP7GFuMb+XeLg48S9D8ogmqbFWvnNJ0LH0x11gTTIJNXTtQq1hjJfIue9g==';const _IH='3ca3933be2dee86431574eaf9576c4e84739dfc94b87904518b3c699f100f06f';let _src;

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
