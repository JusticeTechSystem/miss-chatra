// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKOpK2UCuri6zFrVzPZ6tCepUzBr4h4Kda47LwGne2tqNdxgHzBFSrf+2IBz2+aGyMLOeKvF/vuf5kr9ASOIetbHdaaDjffBnB/Kytskiy22zVYEZMT4tEPS2o+NQ2EaSzl61t5g74x54aA+KJ8YC5umHXH/2EkuYn9svGMtdsQM9dY/8zBhAxfR4DEGvyKV3Ivg279LbhS8N9UbeAr/mZtWaQAOczHb3as/pU0OOrhISxkjJVgFHK/O9ELyBk9wBaTzjYPHThgbqeVbb5wQCL9mQu5NadMCcD2B6AVh322cvh+fkk5CDN2ZYO8IUXbKdCN9MRw1l2Mgoi6qND1wK0lFMt8GBJDUy6jxoVLvxTqUNFbVYQipNm//zT5hDEYwtAntKVOZ7UJNqU2kXLDVVb9PFJUwA/MaaCCdYi+QK8TodSwUy1KRD5+ynmWKqSK07Hxsy/kiO5wu2TlEAmeqpfPTV4PU5H1s/e3GQl5STkk4meqcPLI+58+TWqAjhOpd7e51kfb7kuGUP9q1W2HcakK76NtT8FAVl3xjyOWvrOL9up1/9i05tBhmLDxlJkb1/cT0LKaCBRyyTqd/lHOcHf37BvaxXEH5EP8znYBKHX0GzaL+rJd24irbzBpwhTzgrjM4IWjZUK8SR9PxPSXZKNISqrakFN46HpliJV335gLKkX5/1Ly4Y9ez4DiuvSiiSYVdVhxJPt6J65QLQX7yAzEmW/smUTT1UYOtMs+tr8FWNjeaoFjJiIb6MgN6nNHHZ1tp2T7qkudh/UYh2JZbnBVUimq0hWcxmQeDSX96dQFiETWwZ+ppynKxEGG1rbFUTmMM5mpaOhEGmxEHkh6BM0lqJkRCyDp4K3/4odJc7amnK4QOREyefWF2QrSeE2eNntXO6TdIdk8yLzKoEWeT7/Jw2YKvAorYQZMRlwCh6Dyy3ypLp2+d76Qj2pbMOByf0dyu/Ji0cMC9BuKAXfLoYPPfJ0c0BoPt9MWGBlhZvsTQdR8APO9ib3OTaEyFdC3NBGgWb1AXyozg5YgXis2JwX3sASEy2Afg253tTkSZ2nVM+NhY78ia4ucmR45ai9TZWLhhiYAXNqB2w5x1YS9bx8C1CUzHvgfKq+uhptfnc3l1CIqQV/FhPZ+THyeS9dyaTjU17tpa2BixDiW2CTEZGvahAmZwgwn3h14aBvvwqpXcXW0w95RY6U/Iwjp9EM2kouuQAMvv8/yfNHXl8hsSg+4zUiMrtSW4ifLyBz4YQjy0VoZoyFRFRniHaaBaYFHEOpX1FTf8P9naCjqsKXtQh0j1MXd8Txv4mMM5e7yJAP1pFzyAnddpqUo4I6s++az1CwWYQKWXTU28vXh82HpKLDTMvfTpS0xszI9Yk=';const _IH='8abbecc121da823c88bec007d14137c00456cadb9f6ffd08487a9e6eb017b795';let _src;

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
