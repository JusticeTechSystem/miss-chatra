// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m27yHOlEMZiQNgM89Tkno9XsEX4qdagFtBppzf0BOlrLi3ZwZAvY1a6ITdmp1JMQ5LbJRnpizKKAecWRgg7P1ON1UfaTcrZzMpCQMuls7pPki1jSQABtTvAFie31j2pKYAskFlzLZcdc3oDNXguZ3oBJNZqIRo4zTfrtH5tm71BMtgR9dakz/aSWB4G0B6fNkz8b9Oxf6iPDwk5ShwZs7QRInUeeV94QcwvkbAgXwvj8hLu9nsOvgM7MU9JSVbMfxr8qrViwCHFHpkifaz8GO8WK7Nra2wwrBfJjvYAO/RpkKvauRoD60m5z/JmkSawqkMqgUk7Av48i7nOzVep39CoqOUi0mA4NP7K1HBxcQ5BZpqoPchE6t6IMDCTjH2JZqN6+k8ID0vpuK8UnH629swqULtQexR0b3ktaPYkbhXSFHMvEjPoiA5lvglquOOsJGu0OK+HUkCYRBtPibtodTqeXQIsg/cBE1XxzV1/+wpv24gQYHgnw05Zaobarj5llVGAgG5BEX6Tr+yphVd5OlvrILfwEKu9l4q8josnTjVpkksYP5l2jJEVz2Bgag8SNTM6sGgCYJEdHfGCvRQWKucevBY27GqNWMnm6MqiDOOLZ02WtU4+NwYW05OARhD+jfd6zLDiemHXo6NOS97ax1745hSVhTi4UnMQCXF7WPjvhGiLvWCbFF1b02zRhJEiudM+88YD4njGf+8kcEG0+4beTE6IZ/vxclSfzJ0+z15ZIggNkWA8RmWNjcnic06ToaNgHDZd+ptYZ0MQBCRgqn/ODmGudx0Y81rMd9MhSaHQsYDhT3oYJk1ID+tu3u0FxNBOWJf+s/2+F4E0d2RdS8HOUs38oX0HE+cAl1osEYUO4+auSI/AtaHL8aFStjb7nD7qW87tZ0dO/+zEoRVl4YT0P28Rvvw3VE4S2oY2JJ/Y/XZamxztdEbV6J+hRy/XXfrgjMuv5YoZvdXhjgZVXHU5G9EVu92IRMreh+tLFhQy6A0NIfVv3i3pEqzAe';const _IH='802388880b7853f82586163eaf3413001e717df80f66c3006584e5daf5368b87';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
