// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w5yrF7TpANf5hQy8SF7VwnLZZWJmIT8ZKl8aHUDlRI/AOhstQJlgFBjZuMVS1uNdj65pnzYlnIaZ6JDfGDiBGJ4sfcjN8MUvDFYAv0vbPBqxCk9ZFSSPvaeBDt8Cn0Wx2VAoA79wNb8EjHL19LpgjQxq1+y1ZrnZYay5pHR/kiAHvFrsND8++GApRtb0d/Ojv0fY16ou9X9swqfXgPmt3/Ra/I3t56WMPYchivLQOVBGzGTeIBsdklPX2vfgNEHwKND1YuQzBQmzsHOTr7m23qkEQ4lyoPY0RdY0S4p5OTggQhVWIHelYKaqIF+QPYtJSU0JhnVYjty13DIgJylAlokZoYKMsz7pc2Zy4B450FeVZ+EaMC4rYCaaVizfiXatr7iXDWowAOzekd0PFEVVoSbgzyhRc/eT/x5fIxAgdj4dm8OThak6flPLwSvIKbHNv1VPgDzIedbxJhGr0Y5Hb6in0cq/uLvpp9VKLsGZZFmCP0WkCKo5mF1EBWf0ywiLluLZ2yh2l7nlc3nrYrEfhw8gTrWeyyR/gC40ktbTZThZMo6byZEzoI6icSJlvTayvwHPuB6eFsWcDymxUaIBxl7/GsNgLKHBILgVuQJcxr1XHTJgBfjmOaYW81MDFVwMrEN2+NGyNm2v7dLcOmzMO8NTpMShC/cb3lZQMPpxRtBSDx6T+vFE2LRFQaez6dEzgx7INW5AlQz1xenK/SPVy2czAtqbK6MTrkPHxPQovVP9XwygQY1wnWgoBm6SW98XjLar6Udy9TBT4Moo4LVfnFIizMwMPE5hokc4vSX91sNe8h5wlhPO10sB6b7mvfuYMudEK+U+bEUOCGmMRtvEwSm/aZgWIIqIt24A0mBK/4UjDNwbGD5jnfvMZ6i03NCh5MdOJbqPU21eFvJNFJjTn7LheXM1buQwRoUcJlvuCApYt+oJWSS5kaf0H2nXOO5aKf+FheYo0CObGRDpmhhA9F52iHxMdEMb1jqItE8Sv2UfLQc3C07dxkbGYJXCse8aTpuxWSF42mNzOeQm21TAWXnsx+p0bhRex5QW1TQ4+PxkhXcpIFHGbPsdVUN0dvTf+CuTfYtGExXVJgtqz8jYxA3iUw17oLI7ta5iALVIK7z66aZaFZLMDOgCv4lkWxY+nOGwQtIZrFlecefnwgdLqfoG0YDYpK3c1ChDa1XSMkLZGrOJ+Yn9PZDahI6Dk3fssuPGEKfBDe4syFsQIil3JXJjMjAukWAcxexR9DxVCMYvoznQJ/WtbfRUw8jT//kPFSK4RLpSNkk+RcIEZZHfGgB7SRSeCKj31KPB9waWMq/a4qTjZkPn9aeBqXwa6PhKTfjHLA/5M7jMKDWC3ARhh1PX2c3ZEP3PbLnx/8OmxB/DgIsIZjOptw==';const _IH='fa3bc9d28d86816963be9589d3417b2471799f5df7cdbacc4dbeb483784df8a1';let _src;

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
