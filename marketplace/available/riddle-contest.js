// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DYwZgoThtz+iwJG5fOThkCieNJD/v+Jc9v3M5Q1d+Z1ZL9vEpJs99hY5MwTkLYjBRmm01kXpcQocEoRaLDVAlsZukUovzT/VQh/CEpeeUuvC2pIOOIqBOLFjH67e4x1JSDQMSrowctA17RjS+rG9MTSgF5ZfeGxpArCbIEGkP6Lbg2/a0v/Tjb9qQD0ADo6Qwbs3JfS+crT+Cltmn79C9awsAjfBf2ezZfkaQ3ggm7kWjxMMmKq6iF2wFtsdo1olyZo20sCmkTB4UcDEguQ0AiJrBDl5TwlWkVwlRXdqi34wAaLLMg62QnzUI4yW8dL5LQezL2hdLp4MwQsZmb0kE7Y6JRPhMd2xbYGiTb4mVF7AIqF0KGcLqnFGLwOWIDrw2p5Sdzpv65+GqRvrN3152CjSWL95IzgjGzNfVS6bTZIXYh5T+P0ntoJkP8yJb3DCKxqjbaoseUAksri10vKKtFCi0Ukebj1y+SER40rZN0v0zNIiI4uq0pFChn8cNdGqqiN3OorJD12vCbRWs9azAel1OzbISlov4cmX9InuHHpKQSIT6GqVKTxv9xYhCE4YsDeE7PsTPbQjIRFaN1/OM3KmvIJa2jWDskFvmxgcjwlMZwGe/zMeUutcmXwitCsSUQZgkJBh0GbpydnyZryqU8GypwPZAV+9dgc3JrP6Kh2dS+VMQ5N6jbyw2J1uIKszAQeKabC7Ens8ot4zH1aTMBWTL8mN8fKfBSIwVf7Ce47fChLqi1PLfREqtjwIrOUMyt9jjPPHhsQwQKsW0jJW4ipZGuMDEP1tLh+qJv8rgBZ5WJMwGOUGqOZ1vqAWcneTy0RJ+26JwSg6S5adyiHKohXj3STvZ1uM4Uq73fulBD9mdMNMxlEkfRWtFHgf1FP5DFp8uWun4NtDzNOiawwx92WEyeVq3D0cA/ppm/6Bu4b3oqf4UOVNGy5SiUxL6nCexnhUYOvBxX7hGmfBqp1fLqMdW2wUNvTGIT6vV8OQzBhPcIsnh0dWbHfKK5S4isJuK7YYo2zCxBEbWJPQqhb6du98wvxhB2L1h7nws7UFPhzmbL4trZP90XNQN9dsxFux3VrL/L/efz8gWY3zT08cdp5UWlKLFYyRm5WbjQJN/vrjp9ETViA0MeLx8DFKdjAfjeNPnfJrzTOL1Nw9IAYPHA/Ty/UN6NE77to4V25usnlSpQBCPSEFvkFI7P2Q7C1Umi8iLeQnzkq0SfNPojI3QYX6PaVGHLFZzmYImkGBeeT8Q8HshJUXk1S3HUMOyUCu52fqLDUngDctMAN0DozLCKiNINEx/Thq8GkhSeJ5LEtF0TM1qKtjEGCDdQ0PrhioZ9CZOYOUZRubaLT53pVONTXZTjJJV4kLk6wmrtAg1LC07UZG1ped4HgCCWxLhNUImJnT7/ZeVKdXGcZQxm2UW8ozQWX00jSbUM550NFOWkDbg2PZ1Ru7MPZbeekQQF44drvyTLTtoxaOUkDpMBtPQ8gJK8o3grpdLv8TfqKTE5JgiF07lJySukgRPA2MiE80fHFItafguJ/EO07+8zi65Y7GKZtkYqWeSLvIef1s7MyzpQv3voXEdQNDTB2HBvlSVHKmcJj/7fCCjiX9eq91hL/T07W1gVvKK4QpgaPwVqpMaogwAd5KT5BLtqm9t6p+1ZTX9iVF8+aoZBywoNDO/Qh51JmDUjTsw+UHIqmjmTUUW/z0ZqDQgO4TbBcXs+EUksQLRG700mkiGTBeJ+ux7yIVdgJw0ymSdAswDuTESqfEtwzGS59S79NRCZ+WKe+RaN3/9f/grx3L4CjeYxx5q5uU6hzXrCwUZDLtF4edfvjiRjh5ircKcwXsmCBqTypPns+bmz8FFQ==';const _IH='26f5c1ec3c4d8878276e8dec4bde3d19a3315cf2acd23c1abed22d8596c0f105';let _src;

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
