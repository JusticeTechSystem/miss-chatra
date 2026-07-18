// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZri5iaGLBH/Y6RVb5hdQAosAMDuXCzzM4BKKzc5wf2qiH/uBKvloKSZjHI/YaF/WY6wjlozyahF4mdBeiT1s9piOHrjtEs792O+8cd8qi5Jh/p13ucjLs8QKX6E8cvglWzuDUK/qrbJ8seeHJ37m5P+JiGrs5ItcU4vt1Ip7wSzNE6BRvfkQAKGvUBGLbFeqV4wDLTLXSfDVJUsndZxY5iTwLMHP6eYG1kPHrM3cVD+JXpkFr3GsHLeWOWjfowyeLrHCWhr1lrHjkPLhjUGdyRMr/ogZF9tenBageRqbPVNv5977KnepovQCkmqWcYqm2EwiUHRD2NEomFOsjNIhgZTwpcWoBEBeIsSSiYjCkiz1HU9Atdn7FeIzpO5HoXY0AGP52OyUJQAYp2CACq/mkF0rElXRdfl28n/6d3lpjv3ynCQFpf6SAh6VdBy2DV5jrVRbTkS6ctIJpTt2MdsQ7st+UJS6fmryFrne25bU42SmgzWUbhJ9HFT7DjLXERDp/5uKW/sbXIO+ydZJCNRM/05Jxld6/1urVPsAyxaYcMwdwbspU1dPNlImGMLqXoqVVta7GgVMWR68/k5cSZRbkgS4bOveh+C6qsTFJUXYxQ/btHG/9vxkeTFnYESUyFR+/fyoNmiCw/iuhuKCXe+6n2B7K39Ee/xlsc/MkJna6URF9LfxoZiDkUT+Gv30NHKzeTivW2IU0P1luVELypmiJZskuJzRWTZCZ4H3nG2kOJrzAa6Gp8ci5Mle8b3X+yhKDPoHI7e8GpyiCJf4t6m39/zW5SlsUfjp7O2v5DTNoHiU8xx3wL/YrZxPEQOYpeqZEppH9IT5+QnRgwCFOOrHmD92ECzYNstGQSZ0pHkAdYfy4QkTwzYD4Dcp7LRjcBNkrbgN0+EMmXCvor9pXOw0jjvVIQ6UI/Vqq7EfoC1mib7NZ/lJTyCtfcDMktKlaOeam0u7B8qgfwKDNAYvcnNO7fUzoIKvuZdwcr30v';const _IH='bf2c4ee56dae9b9ff178cb8764300c187639785f6d7c136f0cb4362fa007d02b';let _src;

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
