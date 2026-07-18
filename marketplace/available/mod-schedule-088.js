// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRw6zROE2+Ona74OKDUp6cbfZ1M7+3P+oHHMaH5IHZFnSKq6SVuV4Shbp2nsvNcwkgJGp1kiGx6cMnzPNFbJaLwjIqTfKeLVS/T3m2K1sJqrsuOXqCnoRvirxN4W2PfucXeczhXV1hAGaIdghW/ba8iFElLkN+e66mv0SZ/iXTz38e9yts51QVp/hWAuCuB02UsweBBa4jDDfrOH2hG/io3MiK9vH5927Ia0igDVDHpBiCJh4hUfjnvXo5k7WoHhT7QnszzG6JHn14J+nVnM4DF1+W4T6tz49RmbH5UH8iaNaCJVgE3xle6pDuhT41QwxXFNee+Wq6M27Z1xIAT1T4330IrYneDsgHeT5hOH+gcWKXbvjw9dwtlC2Ms+T6L7yFtOujWIOC4jEbk/msTtRHpfS92AxQALj/vdBodcV4gTIQxJyq1bWN1Sjc6WxofGt4lsNOY75Ls1nylM/0G41+nmExXNGTqnLb4PuF/RxxD/p9cMecAMNPFYXQUBIz+l1I3auPVHIa0+FZCnOXMz952WYb3GmNy45wPGEisdP5P90Lu6iz7NywkdeH6Oqf9MTF3+EiGaOnnSRZ5NWkElvvXv1sY1OjphjpIRAnh3SAjZApF22CC+gHhFOZvSFI4a7ipptAuhByRHM6fk6QKM8c3WFlV776p1RcBjtcqu0BnL1rFl+7p9/mE+8DK2nz/AbqD6JTKedJF3C+FzPvWEmdYKjRM/XSZp/wOIYdqP1nb1u4s8C5nfM11vh700U/e5h04H+Thz5QFb2x1jI40f9IBCRCIlJhhZ8yfEmmmLwO46RHL//GsYuXc5j2NL2CIWhKiXg1Pgmj+UIyvbZtTJBP/I0Nqjtu+8jFPf4+3EBofJtlpEvEiUEhPOR4gO9KjsWGnL8hZkhKHfXAvsTDEA6cMsI4DWcLhlixmWCzfLLQFG8fT21sgpzBcjOodI3EfzyaNDg5k1gjfYwC+ITTVfcnBlX/KNMxR6x+IMpEZRi8f0GepQh+ycXFkUvuw2txr6zZMa9eVJ8fl0GjfQZSynZMYRSFlodAC16bVdusoiBQAoqi5XUqDNiJ7/r223TgTv79ujcw0McDRxDZtXCYVWI7t/66pTh10MVbSWszOK6MWWDPHFY38Rs6ejBxsFph2JEMTaqfPjcG6rMSS1OpzJw2ymcEI8BPP/G/zkwrw0naxJi0nL9z/6sBOeHXIu34/2I++oWCmmTKdhxKswLLfsZ/DKwtn1VCfJWp/l8sEgnsxoq7VODmRLsb5/ouLX6uh4PIICrgWC3NQ71ag7z/qY8I7ptMXgKKP9aOEQxsC4hJGWAGZdLgQTbd/NbxYAg1n/4ABdsmi4Vc44yfKLVpCuwTZH/AaEYXFTdJke7gt9Mg7iqSeVFGcn8bAaAOBFRVhFeIzavpbbdd';const _IH='b639745a45d4f6f8f828ccffd5e3fabd97fb9cecfa855cbcd23ba23309fea950';let _src;

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
