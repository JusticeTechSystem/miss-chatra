// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDrkhliYlHEdneuiUjy/0bE5ADSqPam8JLoeWxJcv5lN2qwo5eYgsTtj1GhctIpnqCpxt3EaFItwyo+O9G5HAvM2braIhMmxhp9jNpltqr2SNCI9myODac9hcpl8YMt4OilL5oUecbTfv8hAfUm/+4F/XYEoN+VsOhiwdwknAEfad9nVJ+vrCoXrXspFCIadW+ZkjWkf2LTrCRFFjiyRyAKqIJXpolENm0QCMzp9xQ96ubhSklPdZCKdg2E3zO3wsmXvmoqVouesFeG0zKZjkHD3eVnRA68qGGSiu8/OAearuEk/ft/C+kKwp50nl8OrgwPiqtPKfWA270kwYDPPkllo5gvwl4xJMvw8v1KLMf1gOWG4H9NEwQl3C9ypr/kUfLS5I7twuJ6TfCSD1FRVqt1lS742v7V2DvIQ7xQJ2EfpSi/OgrjJmqJDDt3eZC5vWwtnIX6n/yg1nyEmwWjfzIbSPdQSQgD4/LJ/nJP+kuGfagAkL9BcpqOgCS3Le7AqnpCR5lBLULAA0funYTqr1rtYKHVw3BH//rzuR1bQDWs2iOLfg4hlySasoy1sJEXMtqM5R5J1hg5YBnSpCMdGGjdVmvOH6Cnvlm7ClMRf3qxOVcS1F9HOyonbXJ1ogl+00QISj1ei/9zvn4JBhYbK1YCQwolL5KuoC24x0HOf5gzujLp46uVt4gDUmiHY+hOvvIvi9SnqL/KVaWKSmJfspCuaUefaBwGSzog4jsmVSo3sXBsDVTJRxwcig4HWG1Tp5Fm8fOh7H/C1xJcltA5Z9p1FDuq00Frav4Cuqowv3dHLHii+crltcPJPFMhnXlOoatxY8DiM+dsDi5Frzrex2j3Q84ykvsvvMO7wW65veEkHPyHJuZvYiDxpzMBD/J2o7tveVsD+7bmHM5/nvA/gqVGuoyu5fbhTP0mWyrigzlYVuGa6UfaMqeO7c0vQWNvzjyqX9TZDIFQpObS7WPDLA1SEmKsKVGrKIoKquo4mMVgDz8EKozBYvTN2v2DJqe4w0Adrl5x+d9jPQBflbvAeWQE2CJp/Zd1p5m8sfIyaOLdfyCa6FnXCYoFZp878/yYXMIEr46hsOPDJT3VCyD3lb1t3CbMfzZyAQwYoUWtU30CqqwsRCWvqgIwFZ38NN2NatDYFCqb+LUNsjCKyDB0x9FGRzCKMQ4x1ZD/Q3C4+xwiG35d7L9AMU/2Pix04V9JvJkBw==';const _IH='4d01eea278e5ce8439841ab8aef89bc58362fd277bfa6c8e6ba65df58664d876';let _src;

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
