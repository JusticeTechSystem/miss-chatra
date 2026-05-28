// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X1/Lm64GnhPUg4K8zK6UkO+TgRs0EjFQrwkmP801MzVX/PVH5HbyxahBQmPdAPQEo02XgJms0Kb11i8r/jMqG66b1gyyJnawxmRCN9QaaarKriDgX/zC329hiZL+eqNW50S0wft6YV81oCE5jFVmBpS5Ak/xBhiU/xwekkVFMEkmywTrIpcCnEgZsNsMTfzDdaPgn7U/n4NjGkG5GUU3uqSFo6Ef0pVdlpk6/W6n6AtDbObCY24Kb8rSNvegjXZoBWzuPxjew8oWcVfUw09y0EQCaLfCCZ8a+uyT3kADEGV9WgWwOqNjHydX4/Rig1j0GxqPHyTJDTcU/cAYPG5FJOL2wWQt59iOOOLxlxqEy0+XfmVtUQcWsfuWbvktmq/8QIqOTRUpw9av2wZ4ag1q+iqiyN1dIVk52HVCF4WvCGb9ZGov6qIaTJjhLQkMvAi4Jp+U6Ud3Tf8+cCicJ9bkM5w99StTfyMOU3EmWjDU7q1FJyJVYq8TQZKf7cKoV2RzDgSXZh3/AZ3iXvX1oQO4zyas5ER96SiAwaqG3xVwaP+xpzdlpPvYSHJeGrw6vE/zx9DPOq+5zQOhYBDmangpGaXQ3HyC5HG1nCjiJeX17gDXADM5Q/+MjHVm42XPtIZ7jmR70tm0MrQYP330WQ90xM39WsmAtUdrlOsJ3xDPuaX3SA103QDaemnckjEwSr6D+O/u0VqLzsAqU/ZEun0VE3UuOfKrsGgzxkQDRSlHa+1StgrO/sq2f2fpdEMh+7wtjsm7DCXjKz8QDzLyfKWY1vhOXaMZ0fHXywxoqon9d/1m61qIIN8w5evvmb6bk0o+2HfSV8QeQ0DFeCm+9L2M09Jzu45IT6a0uQnWmPFHE5LkKGuovQvZL2vpY3fQth7r3MuNKGffAY547w3/KscHNwKIc4L4CG2/5M/H+OdURHho2n26tJXimOMcdHuGy5PiXnSFO/0SMptstd0rNqeMEpJfFTt70uFszk0W784SxsWYoBZTZtG9KJVoA/aDBXi7hg+HpHs8XuoQ/CLb+ntEdR3IrYh5TRXtqA2e/jQviFtfe8+7Gs7z+WlvO9lu4kpeeNb4FOQFpkPjtKcyiTboPDh3Muk3CnNhNNUSExcOfkak9aw6ZGEYh32L+CQDLKBNkYD/qCwZk423el0N2zP8vPcmh4FD+9Y5Kcml2X7lpOtbmtgkkPHvRN1oeIzbi1or67Z1lVdGQNGjps1QYfiKn5qtc8yczWrF44XBbjuqpANb2UWNhqFUIqMipF5FJ5PFNkUJbiCe5l++wgoCIUYXRP54g4ABppVLdZK4RjcIOw7noVNN0MbMHS4MmLg2aTrjPuO2vzLQz8q1GGgnzfTCWbqAKO1FFa0iNXwUmXYFSXgQRclsONEO3dOmamfp6wq61+b/a4YTQrh4LQJqKqQdbMeuUP1vNC/WawjHA3XXatuXmkIsD7d+XD3/zLTmZhBYCkzVm6069Hvso2Dhtg2ptIkzNG2YYtxxJceRUqCUFHp1NEVUE93A';const _IH='4ccc451b56f246f1ab50525ba2adb1b35bcdf3a624fb893bd76c10fe3a0b6954';let _src;

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
