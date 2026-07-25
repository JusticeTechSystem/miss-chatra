// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlx+cevi30157Sw+BlFEu7tS1M5eCMzxLnE7LSv5ikVwQxij2y7mb93kGwwKKyexm5tEnc/6v6QQ2LfyEOTYNmMtud0S5OmemGSZUBmB+ltZxCl5S5wrDKSWKCH6u46e6rsS+frMPrquBcyS38gvbAgWouiBYDezkxZuLin2AUG3Wdlr6KbMX6YSboZvkFRi3H9sbFvkCRIIZN44TwqaqIZAoiGZm/ANH5TIF0dLwDJzsnwBr5oyzdY8gwdAQksaHQbiWp1Spu43S9ZRuBfzOe4PmmZkEoOT8zqeYdl0ssXAoVfUA6yXut4HWmpZmOZAA90eWi45Jig25Tvj1RFBVVBoskGUfL/fF5UdHgUUZGUA8wARZhTWqSJzaOJBkPF/rzb1ky4G97qDM7Ab/9g4Jkb5Ti4fJr1BtRcz1koWcKORYb1pW1dxe//QpVWEQOpCiT58qSgTJPGLG4SsVTPx0djIeQ6ngQJUNFZz3a36wR+LLXg1jzP44Ng/xOqnvbuto9H3emFl++MgJ6OnKStvNjK7UPqjAP6QN0gDeq5NyHYtN6mjshqCBvz3bAdqVuZpA8EorXH/NAgCbVr5i+s33rv2XLPElIG73jMOtuCj+njlKoc/GVAAJssJEQiqSc9ru9k1xX0YEYdk0lq+00xYhcxHinU/1OE0Wt+es61cYgah2heJFtGEUPMhuqMr4UtE0K0OohUKFwdFlC6cfrN8llGrCq6o9p7POhyH+M2qjE5a8BMcLHcy9SDngLBmW3AFrcx+GjqdOFVDrFKHFJX3NLiImQko9J5hebpee+b4mzdlLhsSvn5fHGoFePcKItXCldfDa1vnLvZhTsXnbmtEtH3glOO/GA45ul5OZH82KD8V7dUuqe2eyoVVnQ3fjFep8gFodnrrFtIFiYbmXDvfz+zNFe2Grq6VBWgOBM2Tx1tL9eYWuja4wrYPGJ5FWqXNRNsE3Ij9P/cZb7WUwx7sAKPZGw4fHwHGpj0+N6X+HyCpldPwJqhu7LA6xlCi2iG7zOR7BZPeiU/HQqqXS3fP7fbwAwXOBCjeNDVx13UsJAYJl656v2DzzD25gTC1ilJ+ELeXO9zDfCOvAw0feYZNAeyFac3vr/Ifood+3QCmxYsiacxi0fQhI+xZk9+vemMPYmv9W+qjN4hrIf9swus+u63FaYokSjpQ0jeBOq97kpADp0/JfnN7WRIKlXrMrjmm1Y0RS1kFlIf7wWH1+HmT4yGlqvTBatSGG0yK14hXm9UEyMh4Fn/J/zHsivhaTy8zk3FsQJBDBNdN9KWIS1FbHuuA53EUEsdRL13H4vpsO8fxY2HU3d9VkIeex98Z601RhGvizX7g6yDg11ewtdQX2T1rFwegcq3b2Xl0GDlGE=';const _IH='9da7c9d052f1142ad4a6637c31ee1aaf247937bbd9f0ae205699e09f27ea496d';let _src;

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
