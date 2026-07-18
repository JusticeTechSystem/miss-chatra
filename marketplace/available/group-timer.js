// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDWAI7wpsBo7s5t9Sz7PkO/BPLoWcVspph7Na0wUrB9vMoP43bCmDzDpDD14M9e6vV3HriHPua6VCqxpSaQ+XPtnK92I+iLJm2/kzEvVJxL35PxKFHenHIQTMnqfJntFhwg3D+imfOh8wqygzpZSISjQ43p6ybBH3zP+PsMjNgQwxwVJtlUeSyohWhgZcye2oKrzH9MNalWKLbpuT23bR4NqL841EUwFQm4c4tGagBpM+u1ni/c2qn8rmd7iSyyX0AxBYbU+PylqvbaA5rpvgCClYAguFSpd+58mdIhSMf/eZxBpog2DY3g6kc2swSwV2jFJO5GnUgyE3tPkhIouiqeVkXvs5isAO58Bquo2keCJ5yR7Cant70Ofw8vcnoUaimD31G+b9/L6yM/uUs5R5sBo0gcQ2tb7rA2zgkYjcXoL34IfFexOfRjDdBKUixqxfy45jOCTktViyH3dWs2IzrI6H81idks2Ea3BC88Tg6nuqmJil69jKKv6CkkKgS+kSkOrRI8Cdk//sxG1AKXKMUJ53yMIKRzlaRzIpNRMz7QNcjnpF6do7/rG2vrAV1Ru1kNjOi3vF6s2+v7Gs/wbtMh6ztpSijTSuwYNkWrb92qMwb5J+RaI/20ig/w53V56y3Xug1PdmJvcGSH0YP+Ji+rhxg+QOnv6k2HBPP9Wn0hrLoTsVQ2giUUQEXBTs7OAdmWiMgpA3xsCToJBXSEYdfqBLVSWqeAjEF4mDAefwSMRnJ8cR4eyMlLp0trVqv7Q3O3dK2OMoqv1hCLK/u8Q/zMAOjvp+UBtnKdpsU8PJNkcz7sKLCEURR+NGTPuxtmzc82rJVBAHQ8RwJ61oiWBglcnBce+SOA/3x+kmKkBT1M31L5CZhykxXlyDq9j58tusUnub3WO7wxjgEaKFMk67RKWXsV1TKtkKw38olFSaKAy8sD5g8SzwzxLKRAtZhqiGY7a99h+H3AmL7IeLs5Uhivb30iMYCLnSuSXuyi12lBRtngCzPjz5L4+nPwsLHd5DbiK9ekpWsZZgdRHXmz/kUBbStqc6Ea1CNSvqUDnvr+hGr0P8xfFBECTOVtJcmRISnuTDvMPjsjPKpNF1UCjlzJC6anTii5u6ng331MELhnel9YibP23nE4m539KdzbQPQ+o1nQgML819z0otdutPb7lT/ybxFCzbuTKuxBzOZeHMDgqMSSGdIDRUyBQQBfRi3ooZs9E4rhMLzPjyN+3EzRl86eaDD8B4gxed7AioCF26QuT/VqrXBGnP3Aisrv3R+wcSllFzG3UWrALmZJeq6iMnu2GDfw1+k4x27HigSxSEtmi6Ev+XZ14PzrRYNyIreyAWJZrZqIuVjukTYR45GZTpH0D8V/Rz1diuIhq0WJRfoSdRzETMy3yElH/AFYcFwj3s6OcijFXIp5VDlVBF078DU/7+jPjeaM69jXDAnGs4kjUfo9eFQcHspEX80N46MKICCzDBQdYTHSCOSmGHxwSxvV9CUH+O+UuHhYQ6YTpLxJS9sD3w5r7b0XshIFyKSJOGfcMD2FQqNoZxhg6OpjyrXYgiDTElFOqwm2zCV8LgOEUEmlchbMbnEBnIjjDwbbzAHEFC2k/G1RFm0foxKnlhdcf9DKtZ5+Jl3scBfgTRf9HGprvdAbdvVAXMKv7HOkAlahaxtS7zBF8aZSezYGMbc3u1XC28kjaxmyf9xh9Qm6kTQ0Z+znLLBpZRsfLBpnUAVEXOphAIs/xL1LuApGy6nrykD/wpPXdnR3GP2JEr2f7Wh9TA43CLg4szawa5/sM8rsX5Btq9sC+Gke1kr7z58qq3vuC91GKPvE+Fmwuq71Kb8D5XarLwjbpSFb1nnoFGU6fMpECvzTPHQ6yz1LSlDqPUEyyAHAXs96Qkf2ceGCxNBfjUHoBWpBkJhNZI=';const _IH='e4eab53d18cee4818f4c84761cdc32063abb69e44ec589b02318a707d0472387';let _src;

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
