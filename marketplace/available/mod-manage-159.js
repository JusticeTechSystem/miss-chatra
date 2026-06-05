// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mFHbHNuqNvDKr3OIXwFgtwCJalPmKQV/R7NIcQps4+FhrpYjd/m4UVpPzKlqSR4R21Z4QjaKJ3x00b2uebpNsqELyzu8QcJV+fXxkztlmPZvUzuge72b0E+3aIwLWZpzcowOf89GgaRnYtqlLKYVuu8p/6gtzwyHgO0jRZUwSeZpchrA1s2T2+QHPtE/GHhM7fQ9IrBmwNQKrtX1HCG3QesTRrkvUsBskgBSWVrOuATSxkY6xz7bwHP+w9solIsc04T4n2On5Im5OguACOgZuab8pf0lhRamsvBtkH3pM86qwcn+KHPDwVQCeDtvpv986rUJTZWqIPAlRY0jrk7798Lojdl0hFQvOINVZ2P8980OputLaqGE0sqftchkic4NrWn1c4fqV4cuKeRsuXIre0jacWP6HrNlEyQgnqiJuZb8P0xZKDXEVAS7z6Nw4py164HqH4jx3PEorWTJe+oUxpLwLux8hake5IHMtZsNYgdHAjf2PHbrj+R+C73JDDIU1ClEXCzXIVRhOWn3U/AtEJJZ8AA/gq2tz78MsZBHTPSQrb+rVutFAjQKwuacGxT2wvcO5mrIIBd/jhvcMlpgzQnoGVNP+YCFtk1Qc2QjH4dHMDYaaW20ZSWMV5f0WD3kC+isf64w4yxGPQovEBiGXlM/MBH6I9B7DeGwee1RKDhfGFKqWgCRiO1aBTXRthwAYfJ4FsY4LSPbkdfcnafVT00CkFmBtZYeceE0/sGbUilKtvvOqp2BveDXQX805ArC33V2xx5JCJ4OkzyIdUojhfvp/Q4uYSGkkMANyB8tJSbGYV8+cgS0d169djuK62QJcfQtxYL9+FKH1h8uKSVkroJe4D+ksgxuPhhe/zltIrmoLQcpU68pWm7Kd5elrE4/LsdpnCob/iVSbxUyxXbpUtqK/6tLvUT7UEBuHTZqx6XTHSyihjNFn7PcuWQXZVSVakzIZb+YQOg0zzq0RgVAWQsAtix6SvI7SWF/dHSJ51Ym3ffJRuEZbV9nncvwEyJmgq1spqwI2vtHYyQJF/XqPOt2n+90WMGiGMpLjHHkuIN8q8rEo2u2UfG8pof98Pd40o+eA8+IzIdNIvKalBQGEOKtY5uAKG1IxVr1yX8KT1GriHbxpj9kaaj4+mRTG9+WDGJrEh8A6jgKlpCKlWORjoTL6pyOXIqC2J8HgOwVlv7Qn2rk0clEdy8i3IKc25Tve2GN36Obm2RgKYGrIcbYkZcxzcEN6WbDKXJULU3WC+T5BujwSiRWZkJC7/11AofuMB0wDtzTB9K+5Xf2RrkHuT+mCBekY02cp3wwWYUMxUyALJDO6/x9twpFtQ5aTuCvgEtYYhXJts/6j3vd/zYv7y0tzqVG/HijNIla5q+BfF8ne1g0ULuo9A==';const _IH='264ff8591fe79694b3d3ad9e7506910b8dc77e4515020f24a68a9f1abaf8fc93';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
